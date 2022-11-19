import { DataTypes } from "sequelize";
import db from "../config/db.js";
import Employee from "./Employee.js";

const Job = db.define(
  "job",
  {
    minSalary: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "min_salary",
    },
    maxSalary: {
      type: DataTypes.INTEGER,
      field: "max_salary",
    },
    title: {
      type: DataTypes.STRING(50),
    },
  },
  {
    freezeTableName: true,
  }
);
Job.hasMany(Employee, {
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
  foreignKey: "job_id",
});
Employee.belongsTo(Job, {
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
  foreignKey: "department_id",
});

export default Job;
