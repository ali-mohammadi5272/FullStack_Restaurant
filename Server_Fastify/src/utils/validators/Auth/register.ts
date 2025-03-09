import { object, string } from "yup";
import { fullNamePattern, userNamePattern } from "../../patterns/patterns";

const registerSchema = object().shape({
  fullName: string().min(4).required().matches(fullNamePattern),
  userName: string().min(4).required().matches(userNamePattern),
  email: string().min(5).email().required(),
  password: string().min(8).required(),
});

export default registerSchema;
