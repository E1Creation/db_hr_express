import Location from "../model/Location.js";
import GenericService from "./generic/GenericService.js";

class LocationService extends GenericService {
  constructor() {
    super(Location);
  }
}

export default LocationService;
