import { DataTypes } from "sequelize";
import db from "../config/db.js";
import Employee from "./Employee.js";

const User = db.define(
  "user",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    isEnabled: {
      type: DataTypes.BOOLEAN,
      field: "is_enabled",
    },
    isAccountLocked: {
      type: DataTypes.BOOLEAN,
      field: "is_account_locked",
    },
    refreshToken: {
      type: DataTypes.TEXT,
    },
    employeeId: {
      type: DataTypes.INTEGER,
      field: "employee_id",
    },
  },
  {
    freezeTableName: true,
  }
);
Employee.hasOne(User, {
  foreignKey: "employee_id",
});
User.belongsTo(Employee, {
  foreignKey: "employee_id",
});

export default User;
