import LocationService from "../service/LocationService.js";
import GenericController from "./generic/GenericController.js";

class LocationController extends GenericController {
  constructor() {
    super(LocationService);
  }
}

export default LocationController;
