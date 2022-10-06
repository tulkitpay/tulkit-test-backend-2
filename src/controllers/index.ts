import { Request, Response } from "express";
import * as service from "../services";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await service.getUsers();
    res.send(allUsers);
  } catch (error) {
    const err = error as Error;
    console.error(err?.message || err);
    res.send(err.message);
  }
};

export const getToDos = async (req: Request, res: Response) => {
  try {
    const allToDos = await service.getToDos();
    res.send(allToDos);
  } catch (error) {
    const err = error as Error;
    console.error(err?.message || err);
    res.send(err.message);
  }
};
