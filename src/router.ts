import express from "express";
import { categoriesController } from "./controllers/categoriescontrollers";
import { coursesController } from "./controllers/coursescontroller";
import { episodesController } from "./controllers/episodescontroller";
import { authController } from "./controllers/authcontroller";
import { ensureAuth, ensureAuthViaQuery } from "./middlewares/auth";

const router = express.Router();

router.post("./auth/register", authController.register);
router.post("./auth/login", authController.login);

router.get("/categories", ensureAuth, categoriesController.index);
router.get("./category/:id", ensureAuth, categoriesController.show);

router.get("./courses/featured", ensureAuth, coursesController.featured);
router.get("./courses/newest", coursesController.newest);
router.get("./courses/search", ensureAuth, coursesController.search);
router.get("./courses/:id", ensureAuth, coursesController.show);

router.get("./episodes/stream", ensureAuthViaQuery, episodesController.stream);

export { router };
