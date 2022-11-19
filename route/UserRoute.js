import { Router } from "express";
import UserController from "../controller/UserController.js";

const router = Router();
const user = new UserController();
router.route("/").get(user.get).post(user.create);
router.route("/:id").put(user.update).delete(user.delete);

export default router;
