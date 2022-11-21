import User from "../model/User.js";
import GenericService from "./generic/GenericService.js";
import bcrypt from "bcrypt";

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

  async matchPassword(username, password) {
    const user = await User.findOne({
      where: {
        username: username,
      },
    });
    console.log("password : " + user.password);
    const match = await bcrypt.compare(password, user.password);
    return match;
  }

  async getByUsername(username) {
    const user = await User.findOne({
      where: {
        username: username,
      },
    });
    return user;
  }

  async getByRefreshToken(refToken) {
    const user = await User.findOne({
      where: {
        refreshToken: refToken,
      },
    });
    return user;
  }
}

export default UserService;
