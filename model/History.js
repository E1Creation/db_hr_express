import { DataTypes } from "sequelize";
import db from "../config/db.js";

const History = db.define(
  "history",
  {
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    department: {
      type: DataTypes.INTEGER(5),
    },
    job: {
      type: DataTypes.INTEGER(5),
    },
    manager: {
      type: DataTypes.INTEGER(5),
    },
  },
  {
    freezeTableName: false,
  }
);

export default History;
