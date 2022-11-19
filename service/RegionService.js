import Region from "../model/Region.js";
import GenericService from "./generic/GenericService.js";

class RegionService extends GenericService {
  constructor() {
    super(Region);
  }
}

export default RegionService;
