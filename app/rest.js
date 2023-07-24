import express from "express";
import bodyParser from "body-parser";

export const startRest = () => {
  const app = express();
  const port = 3000;

  app.use(bodyParser.json());
  app.use(express.json());

  app.use("/video");

  app.use((req, res) => {
    res.status(404).json({
      message: "Not found!",
    });
  });

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};
