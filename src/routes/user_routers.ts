import { Router } from "express";
import {
  createUserCont,
  deleteUserCont,
  listUsersCont,
  updateUserCont,
} from "../controllers/user_cont";
import ensureAuthMiddleware from "../middlewares/ensure_auth_middleware";

export const userRoutes = Router();

userRoutes.post("", createUserCont);
userRoutes.get("", ensureAuthMiddleware, listUsersCont);
userRoutes.patch("/:id", ensureAuthMiddleware, updateUserCont);
userRoutes.delete("/:id", ensureAuthMiddleware, deleteUserCont);
