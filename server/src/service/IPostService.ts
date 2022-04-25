import { Post } from "../model/post.model";

export interface IPostService {
  helloWorld(content: string): Promise<void>;
}
