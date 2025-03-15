import { FastifyReply } from "fastify";
import { Roles } from "../../modules/User/enum/roles.enum";
import { AuthenticatedRequest } from "../../types/AuthenticatedRequest";

const roleAccess =
  (roles: Roles[]) => async (req: AuthenticatedRequest, res: FastifyReply) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).send({
        statusCode: 403,
        error: "Forbidden",
        messages: ["Forbidden"],
      });
    }
  };

export { roleAccess };
