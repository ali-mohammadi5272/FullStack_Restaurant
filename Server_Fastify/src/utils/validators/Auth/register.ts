import * as Yup from "yup";
import { userNamePattern } from "../../patterns/patterns";

const registerSchema = Yup.object().shape({
  userName: Yup.string().min(3).required().matches(userNamePattern),
  email: Yup.string().min(5).email().required(),
  password: Yup.string().min(8).required(),
});

export default registerSchema;
