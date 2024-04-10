import * as express from "express";
import catsRouter from "./cats/cats.route";

const app: express.Express = express();

// logging middleware
app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log(req.rawHeaders[1]);
    console.log("this is a logging middleware function. :)");
    next();
  }
);

// json middleware
app.use(express.json());

// cats router
app.use(catsRouter);

// 404 middleware
app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.send({ error: "404 Not Found" });
  }
);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
