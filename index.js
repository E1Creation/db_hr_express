import express from "express";
const app = express();
import db from "./config/db.js";
import User from "./model/User.js";
import router from "./route/index.js";
import Region from "./model/Region.js";
import Country from "./model/Country.js";
import Location from "./model/Location.js";
import Department from "./model/Department.js";
import Employee from "./model/Employee.js";
import Job from "./model/job.js";
import History from "./model/History.js";
import Role from "./model/Role.js";
import UserRole from "./model/UserRole.js";
import morgan from "morgan";

try {
  await db.authenticate();
  await db.sync();
  console.log("Database connected....");
} catch (error) {
  console.log(error);
}
app.use(express.json());
app.use(morgan("dev"));
app.use(router);

app.listen(5000, () => {
  console.log("Server Running at http://localhost:5000");
});
