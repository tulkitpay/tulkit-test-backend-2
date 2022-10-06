import { ToDo } from "./todo";

export interface User {
  id: number;
  email: string;
  name: string;
  phone?: string;
  username: string;
  tasks?: ToDo[];
}
