import * as express from "express";
import { Cat, CatType } from "./app.model";

const app: express.Express = express();

app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log(req.rawHeaders[1]);
    console.log("this is a logging middleware function. :)");
    next();
  }
);

app.get("/", (req: express.Request, res: express.Response) => {
  res.send({ cats: Cat });
});

app.get("/cats/blue", (req: express.Request, res: express.Response) => {
  res.send({ blue: Cat[0] });
});

app.get("/cats/som", (req: express.Request, res: express.Response) => {
  res.send({ som: Cat[1] });
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.send({ error: "404 Not Found" });
  }
);
