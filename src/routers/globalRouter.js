import express from "express";
import { join, login } from"../controllers/userController";
import { home } from "../controllers/videoController";

const golbalRouter = express.Router();

golbalRouter.get("/",home);
golbalRouter.get("/join", join);
golbalRouter.get("/login", login);
export default golbalRouter;