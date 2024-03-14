import express from "express";
import { categoriesController } from "./controllers/categoriescontrollers";
import { coursesController } from "./controllers/coursescontroller";
import { episodesController } from "./controllers/episodescontroller";
import { authController } from "./controllers/authcontroller";

const router = express.Router();

router.post("./auth/register", authController.register);

router.get("/categories", categoriesController.index);
router.get("./category/:id", categoriesController.show);

router.get("./courses/featured", coursesController.featured);
router.get("./courses/newest", coursesController.newest);
router.get("./courses/search", coursesController.search);
router.get("./courses/:id", coursesController.show);

router.get("./episodes/stream", episodesController.stream);

export { router };
