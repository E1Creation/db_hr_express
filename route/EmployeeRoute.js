import { Router } from "express";
import EmployeeController from "../controller/EmployeeController.js";

const router = Router();
const employee = new EmployeeController();
router.route("/").get(employee.get).post(employee.create);
router
  .route("/:id")
  .get(employee.getById)
  .put(employee.update)
  .delete(employee.delete);

export default router;
