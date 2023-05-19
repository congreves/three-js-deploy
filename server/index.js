import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import dalleRoutes from "./routes/dalle.routes.js";

// Set up env variabels
dotenv.config();

// Set up express app
const app = express();

// middlewares to avoid croos origin errors
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use('/api/v1/dalle', dalleRoutes);

// creating demo route

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello From DALL.E" });
});


// listening to port
app.listen(8080, () => {
console.log("Server is running on port 8080");
});