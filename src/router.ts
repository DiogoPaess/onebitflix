import express from "express";
import { categoriesController } from "./controllers/categoriescontrollers";
import { coursesController } from "./controllers/coursescontroller";

const router = express.Router();

router.get("/categories", categoriesController.index);
router.get("./category/:id", categoriesController.show);

router.get("./courses/featured", coursesController.featured);
router.get("./courses/newest", coursesController.newest);
router.get("./courses/:id", coursesController.show);

export { router };
