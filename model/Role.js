import db from "../config/db.js";
import { DataTypes } from "sequelize";

const Role = db.define(
  "role",
  {
    name: {
      type: DataTypes.STRING(20),
    },
  },
  {
    freezeTableName: true,
  }
);

export default Role;
