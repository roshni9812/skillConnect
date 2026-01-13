import express from "express";
import dotenv from "dotenv";
import { singleUpload } from "./middlewares/mutler.js";

dotenv.config();
const app = express();

app.post("/test-upload", singleUpload, (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: "No file received" });
  }
  return res.json({ success: true, filename: req.file.originalname, size: req.file.size });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Test upload server running on port", PORT);
});
