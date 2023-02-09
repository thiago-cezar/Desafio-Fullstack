import { Request, Response } from "express";
import { IContactRequest } from "../interfaces/contacts_int";
import { Contacts } from "../models/contacts_model";
import { createContactServ } from "../services/contacts/create_contact_serv";
import { deleteContactServ } from "../services/contacts/delete_contact_serv";
import { listContactUserServ } from "../services/contacts/list_contact_serv";
import { updateContactServ } from "../services/contacts/update_contact_serv";

export const createContactCont = async (req: Request, res: Response) => {
  const contact: IContactRequest = req.body;
  contact.userId = req.user.id;
  const create = await createContactServ(contact);
  return res.status(201).json(create);
};

export const listContactsCont = async (req: Request, res: Response) => {
  const id = req.user.id;
  const contacts = await listContactUserServ(id);
  return res.json(contacts);
};

export const updateContactCont = async (req: Request, res: Response) => {
  const contact = req.body;
  if (contact.hasOwnProperty("id")) {
    return res.status(401).json({ message: "no unauthorized" });
  }
  const id: string = req.params.id;
  const updatedContact = await updateContactServ(contact, id);
  if (updatedContact instanceof Contacts) {
    return res.json(updatedContact);
  }
};

export const deleteContactCont = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const deleted = await deleteContactServ(id);
  return res.status(204).json(deleted);
};
