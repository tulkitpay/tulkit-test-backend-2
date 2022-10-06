import * as dataSource from "../helpers/data-source";
import { ToDo } from "../types/todo";
import { User } from "../types/user";

export const getUsers = async (): Promise<User[]> => {
  const users = await dataSource.getUsers();
  const todos = await dataSource.getToDos();
  const allUsers = users.map((user) => ({
    id: user.id,
    email: user.email,
    name: user.name,
    phone: user.phone,
    username: user.username,
    tasks: todos
      .filter((todo) => todo.userId === user.id && todo.completed == true)
      .map((todo) => ({
        id: todo.id,
        title: todo.title,
      })),
  }));
  return allUsers;
};

export const getToDos = async (): Promise<ToDo[]> => {
  const users = await dataSource.getUsers();
  const todos = await dataSource.getToDos();
  const allToDos = todos.map((todo) => {
    const user = users.find((user) => user.id === todo.userId) as User;
    return {
      id: todo.id,
      title: todo.title,
      completed: todo.completed,
      user: {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
      },
    };
  });
  return allToDos;
};
