import User from "../model/User.js";
import GenericService from "./generic/GenericService.js";

class UserService extends GenericService {
  constructor() {
    super(User);
  }
  async getUsers(req, res) {
    try {
      const users = await User.findAll();

      res.status(200).json({
        status: "success",
        data: users,
      });
    } catch (error) {
      res.status(500).json({
        status: "fail",
        message: error.message,
      });
    }
  }
}

export default UserService;
