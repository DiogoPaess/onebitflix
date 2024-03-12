import express from "express";
import { categoriesController } from "./controllers/categoriescontrollers";

const router = express.Router();

router.get("/categories", categoriesController.index);
router.get("./category/:id", categoriesController.show);

export { router };
