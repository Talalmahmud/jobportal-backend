import dotenv from "dotenv";
dotenv.config();
import express, { json } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { dbConnect } from "./utils/db.js";

const app = express();

dbConnect();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/test", (req, res) => {
  return res.status(200).json({ message: "Test success..." });
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: "Internal server error." });
});

app.use((req, res) => {
  res.status(404).json({ error: "Page not found" });
});

app.listen(8000, () => console.log("Server is running on port:8000"));
