import dotenv from "dotenv";
dotenv.config();
import express, { json } from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/view", (req, res) => {
  return res.status(200).json({ message: "Hellp!..." });
});

app.listen(8000, () => console.log("Server is running on port:8000"));
