import Department from "../model/Department.js";
import GenericService from "./generic/GenericService.js";

class DepartmentService extends GenericService {
  constructor() {
    super(Department);
  }
}

export default DepartmentService;
