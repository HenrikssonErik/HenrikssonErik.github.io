import Express from "express";
import { IPostService } from "../service/IPostService";
import { PostDBService } from "../service/post.service";

export function createPostRouter(postService: IPostService): Express.Express {
  const postRouter: Express.Express = Express();

  postRouter.get("/", async (req: Express.Request, res: Express.Response) => {
    try {
      res.status(200).send();
    } catch (e: any) {
      res.status(500).send(e.message);
    }
  });

  postRouter.post(
    "/helloWorld",
    async (req: Express.Request, res: Express.Response) => {
      try {
        console.log("Hej från router" + req.body.title);
        await postService.helloWorld(req.body.content);

        res.status(200).send();
      } catch (e: any) {
        res.status(500).send(e.message);
      }
    }
  );

  return postRouter;
}

export function createDefualtPostRouter(): Express.Express {
  return createPostRouter(new PostDBService());
}
