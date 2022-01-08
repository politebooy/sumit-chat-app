import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose, { ConnectOptions } from "mongoose";

dotenv.config();
const app: Application = express();
const port: number = 3002;

mongoose
  .connect("mongodb://localhost:27017/sumit-chat-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/toto", (req: Request, res: Response) => {
  res.send("Hello toto");
});

app.listen(port, function () {
  console.log(`App is listening on port ${port} !`);
});
