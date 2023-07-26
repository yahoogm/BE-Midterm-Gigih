import express from "express";
import { getProducts } from "../controllers/products.js";

const router = express.Router();

router.get("/", getProducts);

export default router;
