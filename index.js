import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import quoteRouter from "./routes/quoteRoutes.js";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const server = express();

const PORT = process.env.PORT || 3000;

server.use(express.static("public"));
server.use(cors());
server.use(express.json());

server.get('/favicon.ico', (req, res) => res.sendStatus(204));

server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

server.use("/api/get", quoteRouter);

connectDB(process.env.URI)
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });
