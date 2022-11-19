import db from "./db.js";
import User from "../model/User.js";
import Region from "../model/Region.js";
import Country from "../model/Country.js";
import Location from "../model/Location.js";
import Department from "../model/Department.js";
import Employee from "../model/Employee.js";
import Job from "../model/job.js";
import History from "../model/History.js";
import Role from "../model/Role.js";
import UserRole from "../model/UserRole.js";

const hibernate = async () => {
  try {
    await db.authenticate();
    await db.sync();
    console.log("Database connected....");
  } catch (error) {
    console.log(error);
  }
};

export default hibernate;
