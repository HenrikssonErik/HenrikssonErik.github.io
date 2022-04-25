import { createConnection } from "mongoose";

export const conn = createConnection(
  "mongodb+srv://chess123:Qwf3yOvC9S9o1hI8@gothenburgchesscompany.uq8cg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);
