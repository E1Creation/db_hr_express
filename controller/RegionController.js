import RegionService from "../service/RegionService.js";
import GenericController from "./generic/GenericController.js";

class RegionController extends GenericController {
  constructor() {
    super(RegionService);
  }
}

export default RegionController;
