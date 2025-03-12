import { object, string } from "yup";

const createContactSchema = object().shape({
  firstName: string().min(3).required(),
  lastName: string().min(3).required(),
  email: string().email().min(5).required(),
  subject: string().min(3).required(),
  message: string().min(3).required(),
});

export default createContactSchema;
