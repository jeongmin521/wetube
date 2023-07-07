import express from "express";
import { join, login } from"../controllers/userController";
import { trending } from "../controllers/videoController";

const golbalRouter = express.Router();

golbalRouter.get("/", trending);
golbalRouter.get("/join", join);
golbalRouter.get("/login", login);
export default golbalRouter;