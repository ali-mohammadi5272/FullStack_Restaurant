import { object, string } from "yup";

const loginSchema = object().shape({
  identifier: string().email().min(4).required(),
  password: string().min(8).required(),
});

export default loginSchema;
