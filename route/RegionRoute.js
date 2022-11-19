import { Router } from "express";
import RegionController from "../controller/RegionController.js";

const router = Router();
const region = new RegionController();
router.route("/").get(region.get).post(region.create);
router.route("/:id").put(region.update).delete(region.delete);

export default router;
