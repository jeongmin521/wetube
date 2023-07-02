import express from "express";
import morgan from "morgan";
import golbalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug"); //뷰 엔진을 pug로 셋팅
app.use(logger);
app.use("/", golbalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () => console.log(`server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening)