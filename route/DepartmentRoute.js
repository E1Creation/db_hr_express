import { Router } from "express";
import DepartmentController from "../controller/DepartmentController.js";

const router = Router();
const department = new DepartmentController();
router.route("/").get(department.get).post(department.create);
router.route("/:id").put(department.update).delete(department.delete);

export default router;
