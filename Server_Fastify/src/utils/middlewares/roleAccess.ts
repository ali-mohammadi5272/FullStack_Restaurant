import { Roles } from "../../modules/User/enum/roles.enum";
import { AuthenticatedRequest } from "../../types/AuthenticatedRequest.type";
import { Forbidden } from "http-errors";

const roleAccess = (roles: Roles[]) => async (req: AuthenticatedRequest) => {
  if (!req.user || !roles.includes(req.user.role)) {
    throw new Forbidden("You are not allowed");
  }
};

export { roleAccess };
