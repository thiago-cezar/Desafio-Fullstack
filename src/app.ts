import express from "express";
import "express-async-errors";
import "reflect-metadata";
import { handleErrorMiddleware } from "./middlewares/handle_error_middle";
import { contactsRoutes } from "./routes/contacts_routes";
import loginRoutes from "./routes/login_routes";
import { userRoutes } from "./routes/user_routers";

export const app = express();

app.use(express.json());
app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/user/contacts", contactsRoutes);
app.use(handleErrorMiddleware);
