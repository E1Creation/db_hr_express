import { DataTypes } from "sequelize";
import db from "../config/db.js";
import Department from "./Department.js";
import History from "./History.js";
import User from "./User.js";

const Employee = db.define(
  "employee",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING(25),
      allowNull: false,
      field: "first_name",
    },
    lastName: {
      type: DataTypes.STRING(25),
      field: "last_name",
    },
    email: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
    },
    phoneNumber: {
      type: DataTypes.STRING(20),
      unique: true,
      field: "phone_number",
    },
    hireDate: {
      type: DataTypes.DATEONLY,
      field: "hire_date",
    },
    salary: {
      type: DataTypes.INTEGER,
    },
    comissionPct: {
      field: "comission_pct",
      type: DataTypes.FLOAT(8.2),
    },
    managerId: {
      field: "manager_id",
      type: DataTypes.INTEGER(5),
    },
  },
  {
    freezeTableName: true,
  }
);
Employee.hasMany(Employee, {
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
  foreignKey: "manager_id",
});
Employee.belongsTo(Employee, {
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
  foreignKey: "manager_id",
});
Employee.hasOne(Department, {
  foreignKey: "manager_id",
});

Department.belongsTo(Employee, {
  foreignKey: "manager_id",
});
Department.hasMany(Employee, {
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
  foreignKey: "department_id",
});
Employee.belongsTo(Department, {
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
  foreignKey: "department_id",
});

Employee.hasMany(History, {
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
  foreignKey: "history_id",
});

History.belongsTo(Employee, {
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
  foreignKey: "history_id",
});

export default Employee;
