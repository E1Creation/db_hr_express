import UserService from "../service/UserService.js";
import GenericController from "./generic/GenericController.js";

class UserController extends GenericController {
  constructor() {
    super(UserService);
  }
}

export default UserController;
