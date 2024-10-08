import express from "express";
import {
  createJob,
  deleteJob,
  editJobById,
  viewAllJob,
} from "../controllers/jobController.js";
import { userAuth } from "../utils/auth.js";

const router = express.Router();

router.get("/job", userAuth, viewAllJob);
router.post("/job", userAuth, createJob);
router.put("/job/:id", userAuth, editJobById);
router.delete("/job/:id", userAuth, deleteJob);

export default router;
