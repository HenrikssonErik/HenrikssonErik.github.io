import { Schema, Model } from "mongoose";
import { conn } from "./conn";
import { Login } from "../src/model/login.model";

const postSchema: Schema = new Schema({
  name: {
    type: String,

    required: true,
  },

  email: {
    type: String,

    unique: true,

    required: true,
  },
  password: {
    type: String,

    required: true,
  },
});

export const loginModel = conn.model<Login>("Login", postSchema);
