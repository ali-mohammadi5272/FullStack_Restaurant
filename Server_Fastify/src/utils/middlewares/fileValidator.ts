import { FastifyReply, FastifyRequest } from "fastify";
import { ImageFormats } from "../../modules/Food/enum/imageFormats.enum";

const fileValidator =
  (validFormats: ImageFormats[]) =>
  async (req: FastifyRequest, res: FastifyReply) => {
    try {
      const formData = await req.formData();

      const file = formData.get("file") as File | null;

      if (file) {
        const isValidFormat = validFormats.includes(file.type as ImageFormats);
        if (!isValidFormat) {
          return res.status(400).send({
            statusCode: 400,
            error: "Valiadtion",
            messages: ["Image's format is not valid"],
          });
        }
      }
    } catch (err) {
      return res.status(500).send({
        statusCode: 500,
        error: "Internal Server Error",
        messages: ["Internal Server Error"],
      });
    }
  };

export { fileValidator };
