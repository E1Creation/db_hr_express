import UserService from "../service/UserService.js";
import GenericController from "./generic/GenericController.js";
import jwt from "jsonwebtoken";

class UserController extends GenericController {
  constructor() {
    super(UserService);
    this.service = new UserService();

    this.login = this.login.bind(this);
  }

  async login(req, res) {
    try {
      const { username, password } = req.body;
      const match = await this.service.matchPassword(username, password);
      console.log(`username : ${username} and password : ${password}`);
      if (!match) {
        return res.status(400).json({
          status: "fail",
          message: "username or password is wrong",
        });
      }
      const user = await this.service.getByUsername(username);
      const { id, email } = user;

      const accessToken = jwt.sign(
        { id, username, email },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: "15s",
        }
      );
      const refreshToken = jwt.sign(
        { id, username, email },
        process.env.REFRESH_TOKEN_SECRET,
        {
          expiresIn: "1d",
        }
      );
      console.log(
        await this.service.update(id, { refreshToken: refreshToken })
      );

      res.cookie("refresh_token", refreshToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      });
      res.status(200).json({
        status: "success",
        access_token: accessToken,
      });
    } catch (error) {
      res.status(500).json({
        status: "fail",
        message: error.message,
      });
    }
  }
}

export default UserController;
