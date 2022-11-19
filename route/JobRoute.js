import { Router } from "express";
import JobController from "../controller/JobController.js";
const router = Router();
const job = new JobController();
router.route("/").get(job.get).post(job.create);
router.route("/:id").put(job.update).delete(job.delete);

export default router;
