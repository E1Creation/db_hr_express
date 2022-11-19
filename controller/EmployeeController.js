import { EmployeeService } from "../service/EmployeeService.js";
import GenericController from "./generic/GenericController.js";

class EmployeeController extends GenericController {
  constructor() {
    super(EmployeeService);
  }
}

export default EmployeeController;
