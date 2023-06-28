import express from "express";

const videoRouter = express.Router();

const handleWatchVideo = (req, res) => res.send("watch videeo");

videoRouter.get("/watch", handleWatchVideo);