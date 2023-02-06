import { Router } from "express";
import { loginCont } from "../controllers/login_cont";

const loginRoutes = Router();

loginRoutes.post("", loginCont);

export default loginRoutes;
