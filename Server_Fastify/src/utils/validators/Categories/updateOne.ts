import { object, string } from "yup";

const updateCategorySchema = object().shape({
  title: string().min(2).required(),
});

export default updateCategorySchema;
