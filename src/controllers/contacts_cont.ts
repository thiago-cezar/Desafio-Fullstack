import { Request, Response } from "express";
import { IContactRequest } from "../interfaces/contacts_int";
import { createContactServ } from "../services/contacts/create_contact_serv";

export const createContactCont = async (req: Request, res: Response) => {
  const contact: IContactRequest = req.body;
  contact.userId = req.user.id;
  const create = await createContactServ(contact);
  return res.status(201).json(create);
};
