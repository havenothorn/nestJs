import * as express from "express";

const app: express.Express = express();

const port: number = 8000;

app.get("/", (req: express.Request, res: express.Response) => {
  res.send({ name: "nami", age: 999, friends: ["ss", "ys", "ye"] });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/`);
});
