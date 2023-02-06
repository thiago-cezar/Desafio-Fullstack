import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { IUserRequest } from "../interfaces/user_int";
import { User } from "../models/user_model";
import { createUserServ } from "../services/user/create_user_serv";
import { deleteUserServ } from "../services/user/delete_user_serv";
import { listUsersServ } from "../services/user/list_user_serv";
import { updateUserServ } from "../services/user/update_user_serv";

export const createUserCont = async (req: Request, res: Response) => {
  const user: IUserRequest = req.body;
  const createdUser = await createUserServ(user);
  return res.status(201).json(instanceToPlain(createdUser));
};

export const listUsersCont = async (req: Request, res: Response) => {
  const users = await listUsersServ();
  return res.json(instanceToPlain(users));
};

export const updateUserCont = async (req: Request, res: Response) => {
  const user = req.body;
  if (user.hasOwnProperty("id")) {
    return res.status(401).json({ message: "no unauthorized" });
  }
  const id: string = req.params.id;
  const updatedUser = await updateUserServ(user, id);
  if (updatedUser instanceof User) {
    return res.json(updatedUser);
  }
};

export const deleteUserCont = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const deleted: any = await deleteUserServ(id);
  return res.status(deleted[1] as number).json({
    message: deleted[0],
  });
};
