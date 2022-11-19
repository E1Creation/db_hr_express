import { Router } from "express";
import RoleController from "../controller/RoleController.js";

const router = Router();
const role = new RoleController();
router.route("/").get(role.get).post(role.create);
router.route("/:id").put(role.update).delete(role.delete);

export default router;
