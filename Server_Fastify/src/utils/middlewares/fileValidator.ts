import { FastifyRequest } from "fastify";
import { ImageFormats } from "../../modules/Food/enum/imageFormats.enum";
import { BadRequest } from "http-errors";
import { FileTypes } from "../../enums/fileFormats.enum";

interface FileValidatorConfig {
  fileType: FileTypes;
  key: string;
  formats: ImageFormats[];
}

const fileValidator =
  (configs: FileValidatorConfig[]) => async (req: FastifyRequest) => {
    const formData = await req.formData();

    for (const config of configs) {
      const file = formData.get(config.key) as File | null;
      if (file) {
        const isValidFormat = config.formats.includes(<ImageFormats>file.type);

        if (!isValidFormat) {
          throw new BadRequest(`${config.fileType}'s Format is not valid`);
        }
      }
    }
  };

export { fileValidator };
