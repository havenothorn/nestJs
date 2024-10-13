import * as express from "express";
import catsRouter from "./cats/cats.route";

class Server {
  public app: express.Application;

  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  private setRoute() {
    this.app.use(catsRouter);
  }

  private setMiddleware() {
    this.app.use(
      (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
      ) => {
        console.log(req.rawHeaders[1]);
        console.log("this is a logging middleware function. :)");
        next();
      }
    );

    this.app.use(express.json());

    this.setRoute();

    this.app.use(
      (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
      ) => {
        res.send({ error: "404 Not Found" });
      }
    );
  }

  public listen() {
    this.setMiddleware();
    this.app.listen(8000, () => {
      console.log("Server is running on port 8000");
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}

init();
