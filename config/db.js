import { Sequelize } from "sequelize";

const db = new Sequelize("db_hr_express", "root", "", {
  host: "localhost",
  dialect: "mysql",
  port: 3307,
});

export default db;
