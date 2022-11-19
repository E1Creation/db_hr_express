import Country from "../model/Country.js";
import GenericService from "./generic/GenericService.js";

class CountryService extends GenericService {
  constructor() {
    super(Country);
  }
}

export default CountryService;
