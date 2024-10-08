import express from "express";
import {
  createJob,
  deleteJob,
  editJobById,
  viewAllJob,
} from "../controllers/jobController";

const router = express.Router();

router.get("/job", viewAllJob);
router.post("/job", createJob);
router.put("/job/:id", editJobById);
router.delete("/job/:id", deleteJob);

export default route;
