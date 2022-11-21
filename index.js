import express from "express";
import router from "./route/index.js";
import morgan from "morgan";
import hibernate from "./config/index.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
hibernate();
app.use(express.json());
app.use(morgan("dev"));
app.use(router);

app.listen(5000, () => {
  console.log("Server Running at http://localhost:5000");
});
