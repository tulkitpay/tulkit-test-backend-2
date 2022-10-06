import { User } from "./user";

export interface ToDo {
  id: number;
  userId?: number;
  title: string;
  completed?: boolean;
  user?: User;
}
