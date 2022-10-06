import { fetchApi } from "./fetch";
import { User } from "../types/user";
import { ToDo } from "../types/todo";

const API_URL = "https://jsonplaceholder.typicode.com";

export async function getUsers(): Promise<User[]> {
  return await fetchApi<User[]>(`${API_URL}/users`);
}

export async function getToDos(): Promise<ToDo[]> {
  return await fetchApi<ToDo[]>(`${API_URL}/todos`);
}
