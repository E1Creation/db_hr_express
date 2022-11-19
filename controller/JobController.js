import JobService from "../service/JobService.js";
import GenericController from "./generic/GenericController.js";

class JobController extends GenericController {
  constructor() {
    super(JobService);
  }
}

export default JobController;
