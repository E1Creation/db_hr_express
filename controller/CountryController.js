import CountryService from "../service/CountryService.js";
import GenericController from "./generic/GenericController.js";

class CountryController extends GenericController {
  constructor() {
    super(CountryService);
  }
}

export default CountryController;
