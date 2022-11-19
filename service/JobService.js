import Job from "../model/Job.js";
import GenericService from "./generic/GenericService.js";

class JobService extends GenericService {
  constructor() {
    super(Job);
  }
}

export default JobService;
