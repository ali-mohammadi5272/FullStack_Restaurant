import { AnsweredTypes } from "../enum/answered.enum";

export interface ContactUsType {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
  answered: AnsweredTypes;
  createdAt: Date;
  updatedAt: Date;
}
