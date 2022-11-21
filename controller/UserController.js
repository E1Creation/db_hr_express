import UserService from "../service/UserService.js";
import GenericController from "./generic/GenericController.js";
import jwt from "jsonwebtoken";

class UserController extends GenericController {
  constructor() {
    super(UserService);
    this.service = new UserService();

    this.login = this.login.bind(this);
    this.refreshToken = this.refreshToken.bind(this);
    this.logout = this.logout.bind(this);
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
      const { id } = user;

      const accessToken = jwt.sign(
        { id, username },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: "15m",
        }
      );
      const refreshToken = jwt.sign(
        { id, username },
        process.env.REFRESH_TOKEN_SECRET,
        {
          expiresIn: "1d",
        }
      );
      console.log(
        await this.service.update(id, { refreshToken: refreshToken })
      );

      res.cookie("refreshToken", refreshToken, {
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
  async refreshToken(req, res) {
    try {
      const refToken = req.cookies.refreshToken;
      if (!refToken) {
        return res.status(401).json({
          status: "fail",
          message: "refresh token does'nt exist or already expired",
        });
      }
      const user = this.service.getByRefreshToken(refToken);
      if (!user) {
        return res.status(403).json({
          status: "fail",
          message: "the user doesnt exist",
        });
      }
      jwt.verify(refToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
        if (err) {
          return res.status(403).json({
            status: "fail",
            message: "refresh token already expired",
          });
        }
        const { id, username } = user;
        const accessToken = jwt.sign(
          {
            id,
            username,
          },
          process.env.ACCESS_TOKEN_SECRET,
          {
            expiresIn: "15m",
          }
        );
        res.status(201).json({
          status: "created",
          access_token: accessToken,
        });
      });
    } catch (error) {
      res.status(500).json({
        status: "fail",
        message: error.message,
      });
    }
  }

  async logout(req, res) {
    try {
      const refToken = req.cookies.refreshToken;
      if (!refToken) return res.sendStatus(403);
      const user = await this.service.getByRefreshToken(refToken);
      if (!user) return res.sendStatus(403);
      await this.service.update(user.id, { refreshToken: refToken });
      res.clearCookie("refreshToken");
      res.status(200).json({
        status: "success",
        message: "you have already logout",
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
