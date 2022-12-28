import express from "express";
import router from "./route/index.js";
import morgan from "morgan";
import hibernate from "./config/index.js";
import dotenv from "dotenv";
import cookies from "cookie-parser";
import cors from "cors";
dotenv.config();
const app = express();
hibernate();
app.use(
  cors({
    allowedHeaders: "Content-Type,Set-Cookie,authorization",
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(cookies());
app.use(express.json());
app.use(morgan("dev"));
app.use(router);

app.listen(5000, () => {
  console.log("Server Running at http://localhost:5000");
});
