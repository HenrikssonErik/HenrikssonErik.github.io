import { Schema, Model } from "mongoose";
import { conn } from "./conn";
import { Post } from "../src/model/post.model";

const postSchema: Schema = new Schema({
  id: {
    type: Number,

    required: true,

    unique: true,
  },

  title: {
    type: String,

    required: true,
  },
  content: {
    type: String,

    required: true,
  },
});

export const postModel = conn.model<Post>("Post", postSchema);
