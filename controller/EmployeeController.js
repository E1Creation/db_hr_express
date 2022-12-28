import { EmployeeService } from "../service/EmployeeService.js";
import GenericController from "./generic/GenericController.js";

class EmployeeController extends GenericController {
  constructor() {
    super(EmployeeService);
    this.service = new EmployeeService();
    this.register = this.register.bind(this);
  }
  async register(req, res) {
    try {
      const data = await this.service.register(req.body);
      res.status(201).json({
        status: "success",
        data: data,
      });
    } catch (error) {
      res.status(500).json({
        status: "fail",
        message: error.message,
      });
    }
  }
}

export default EmployeeController;
