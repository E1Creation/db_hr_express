import DepartmentService from "../service/DepartmentService.js";
import GenericController from "./generic/GenericController.js";

class DepartmentController extends GenericController {
  constructor() {
    super(DepartmentService);
  }
}

export default DepartmentController;
