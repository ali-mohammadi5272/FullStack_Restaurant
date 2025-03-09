import { object, string } from "yup";
import { emailPattern, userNamePattern } from "../../patterns/patterns";

const loginSchema = object().shape({
  identifier: string()
    .min(4)
    .trim()
    .matches(
      new RegExp(`(${userNamePattern.source})|(${emailPattern.source})`),
      "Inserted Username/Email is not a valid Username/Email"
    )
    .required(),
  password: string().min(8).trim().required(),
});

export default loginSchema;
