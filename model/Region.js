import { DataTypes } from "sequelize";
import db from "../config/db.js";
import Country from "./Country.js";

const Region = db.define(
  "region",
  {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);
Region.hasMany(Country, {
  foreignKey: "region_id",
});
Country.belongsTo(Region, {
  foreignKey: "region_id",
});
export default Region;
