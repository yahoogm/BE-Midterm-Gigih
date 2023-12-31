import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import videosRouter from "../routes/videos.js";
import productsRouter from "../routes/products.js";
import commentsRouter from "../routes/comments.js";
import cors from "cors";

dotenv.config();

const app = express();

export const startRest = () => {
  const mongoString =
    process.env.NODE_ENV === "production"
      ? process.env.DB_URL_DEPLOY
      : process.env.DB_URL;

  mongoose.connect(mongoString);
  const db = mongoose.connection;

  db.on("error", (error) => {
    console.log(error);
  });

  db.on("connected", () => {
    console.log("Database conneected");
  });

  const port = process.env.PORT;

  app.use(bodyParser.json());
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());

  app.use("/videos", videosRouter);
  app.use("/products", productsRouter);
  app.use("/comments", commentsRouter);

  app.use((req, res) => {
    res.status(200).json({
      message: "Welcome to final project API",
    });
  });

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};
