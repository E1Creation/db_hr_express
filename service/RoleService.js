import Role from "../model/Role.js";
import GenericService from "./generic/GenericService.js";

class RoleService extends GenericService {
  constructor() {
    super(Role);
  }
}

export default RoleService;
