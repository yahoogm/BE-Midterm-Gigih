import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import videosRouter from "../routes/videos.js";
import productsRouter from "../routes/products.js";
import commentsRouter from "../routes/comments.js";

dotenv.config();

const app = express();

export const startRest = () => {
  const mongoString = process.env.DB_URL;

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

  app.use("/videos", videosRouter);
  app.use("/products", productsRouter);
  app.use("/comments", commentsRouter);

  app.use((req, res) => {
    res.status(404).json({
      message: "Not found!",
    });
  });

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};
