import { IPostService } from "./IPostService";
import { postModel } from "../../db/post.schema";

export class PostDBService implements IPostService {
  async helloWorld(content: string): Promise<void> {
    try {
      console.log("Hello from post.service" + content);
    } catch (err) {
      console.log(err);
    }
  }
}

export const postDbService = new PostDBService();
