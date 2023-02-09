import { Router } from "express";
import {
  createContactCont,
  deleteContactCont,
  listContactsCont,
  updateContactCont,
} from "../controllers/contacts_cont";
import ensureAuthMiddleware from "../middlewares/ensure_auth_middleware";

export const contactsRoutes = Router();

contactsRoutes.post("", ensureAuthMiddleware, createContactCont);
contactsRoutes.get("", ensureAuthMiddleware, listContactsCont);
contactsRoutes.patch("/:id", ensureAuthMiddleware, updateContactCont);
contactsRoutes.delete("/:id", ensureAuthMiddleware, deleteContactCont);
