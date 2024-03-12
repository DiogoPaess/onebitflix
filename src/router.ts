import express from "express";
import { categoriesController } from "./controllers/categoriescontrollers";
import { coursesController } from "./controllers/coursescontroller";

const router = express.Router();

router.get("/categories", categoriesController.index);
router.get("./category/:id", categoriesController.show);

router.get("./courses/:id", coursesController.show);

export { router };