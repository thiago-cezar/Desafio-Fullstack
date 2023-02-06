import { Router } from "express";
import { createContactCont } from "../controllers/contacts_cont";
import ensureAuthMiddleware from "../middlewares/ensure_auth_middleware";

export const contactsRoutes = Router();

contactsRoutes.post("", ensureAuthMiddleware, createContactCont);
