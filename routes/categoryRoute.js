import express from "express";

import { userAuth } from "../utils/auth.js";
import {
  createCategory,
  viewAllCategory,
} from "../controllers/categoryController.js";

const router = express.Router();

router.post("/category", userAuth, createCategory);
router.get("/category", userAuth, viewAllCategory);

export default router;
