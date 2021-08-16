import express from "express";
import cors from "cors";
import { routes } from "./routes";

const app = express();
app.use(cors());

routes(app);

const port = 8000;
app.listen(port, () => {
  console.log(`서버 대기 중 ${port} 포트`);
});
