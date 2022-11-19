import History from "../model/History.js";
import GenericService from "./generic/GenericService.js";

class HistoryService extends GenericService {
  constructor() {
    super(History);
  }
}

export default HistoryService;
