import { FastifyRequest } from "fastify";
import { ImageFormats } from "../../modules/Food/enum/imageFormats.enum";
import { BadRequest } from "http-errors";

const fileValidator =
  (validFormats: ImageFormats[]) => async (req: FastifyRequest) => {
    const formData = await req.formData();

    const file = formData.get("file") as File | null;

    if (file) {
      const isValidFormat = validFormats.includes(file.type as ImageFormats);
      if (!isValidFormat) {
        throw new BadRequest("Image's Format is not valid");
      }
    }
  };

export { fileValidator };
