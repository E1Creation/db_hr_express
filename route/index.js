import { Router } from "express";
import UserRoute from "./UserRoute.js";
import EmployeeRoute from "./EmployeeRoute.js";
import RegionRoute from "./RegionRoute.js";
import CountryRoute from "./CountryRoute.js";
import LocationRoute from "./LocationRoute.js";
import DepartmentRoute from "./DepartmentRoute.js";
import RoleRoute from "./RoleRoute.js";
import JobRoute from "./JobRoute.js";
import HistoryRoute from "./HistoryRoute.js";
import RouterWithoutAuth from "./RouteWithoutAuth.js";
import verifyToken from "../middleware/VerifyToken.js";

const router = Router();
// route yang tidak butuh authorization
router.use("/", RouterWithoutAuth);

router.use(verifyToken);
//route butuh authorization
router.use("/user", UserRoute);
router.use("/employee", EmployeeRoute);
router.use("/region", RegionRoute);
router.use("/country", CountryRoute);
router.use("/location", LocationRoute);
router.use("/department", DepartmentRoute);
router.use("/role", RoleRoute);
router.use("/job", JobRoute);
router.use("/history", HistoryRoute);

export default router;
