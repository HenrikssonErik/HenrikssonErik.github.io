/**

 * Required External Modules
*/
import express from "express";
import cors from "cors";
import { createDefualtPostRouter } from "./router/post.router";

/**
 
  * App Variables
 
  */

export const app = express();

/**
 
  * App Configuration
 
  */

app.use(express.json());
app.use(cors());
app.use("/post", createDefualtPostRouter());
