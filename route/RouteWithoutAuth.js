import { Router } from "express";
import EmployeeController from "../controller/EmployeeController.js";
import UserController from "../controller/UserController.js";

const router = Router();
const user = new UserController();
const employee = new EmployeeController();
router.post("/login", user.login);
router.post("/register", employee.register);
router.get("/token", user.refreshToken);
router.get("/logout", user.logout);

export default router;
