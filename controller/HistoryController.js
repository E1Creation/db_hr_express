import HistoryService from "../service/HistoryService.js";
import GenericController from "./generic/GenericController.js";

class HistoryController extends GenericController {
  constructor() {
    super(HistoryService);
  }
}

export default HistoryController;
