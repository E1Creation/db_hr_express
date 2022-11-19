import RoleService from "../service/RoleService.js";
import GenericController from "./generic/GenericController.js";

class RoleController extends GenericController {
  constructor() {
    super(RoleService);
  }
}

export default RoleController;
