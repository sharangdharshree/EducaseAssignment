import { Router } from "express";
import {
  homePage,
  addSchool,
  listSchools,
} from "../controllers/school.controller.js";

const router = Router();

router.route("/").get(homePage);

router.route("/addSchool").post(addSchool);

router.route("/listSchools").get(listSchools);

export default router;
