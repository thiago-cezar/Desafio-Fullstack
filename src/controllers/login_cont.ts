import { Request, Response } from "express";
import { IUserLogin } from "../interfaces/user_int";
import { loginServ } from "../services/login/login_serv";

export const loginCont = async (req: Request, res: Response) => {
  const login: IUserLogin = req.body;
  const token = await loginServ(login);
  return res.json({ token });
};
