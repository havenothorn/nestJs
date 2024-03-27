import * as express from "express";
import { Cat, CatType } from "./app.model";

const app: express.Express = express();

app.get("/", (req: express.Request, res: express.Response) => {
  console.log(req);
  res.send({ cats: Cat });
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
