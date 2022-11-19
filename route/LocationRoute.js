import { Router } from "express";
import LocationController from "../controller/LocationController.js";

const router = Router();
const location = new LocationController();
router.route("/").get(location.get).post(location.create);
router.route("/:id").put(location.update).delete(location.delete);

export default router;
