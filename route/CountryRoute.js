import { Router } from "express";
import CountryController from "../controller/CountryController.js";

const router = Router();
const country = new CountryController();
router.route("/").get(country.get).post(country.create);
router.route("/:id").put(country.update).delete(country.delete);

export default router;
