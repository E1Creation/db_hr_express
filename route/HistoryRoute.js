import { Router } from "express";
import HistoryController from "../controller/HistoryController.js";
const router = Router();
const history = new HistoryController();
router.route("/").get(history.get).post(history.create);
router.route("/:id").put(history.update).delete(history.delete);

export default router;
