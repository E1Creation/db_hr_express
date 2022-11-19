import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Department = db.define(
  "department",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Department;
