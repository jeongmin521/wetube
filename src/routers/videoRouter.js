import Express from "express";
import { see, edit, upload, deleteVideo } from "../controllers/videoController";

const videoRouter = Express.Router();

videoRouter.get("/upload", upload);
videoRouter.get("/:id(\\d+)", see);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);

export default videoRouter;