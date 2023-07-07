import express from "express";
import morgan from "morgan";
import golbalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views"); //현재 작업 디렉토리+ src해서 파일 찾기
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use("/", golbalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () => console.log(`server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening)