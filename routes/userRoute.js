import express from "express";
import { createUser, userLogin } from "../controllers/userController";

const router = express.Router();

router.post("/user", createUser);
router.post("/login", userLogin);

export default route;
