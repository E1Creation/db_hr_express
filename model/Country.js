import { DataTypes } from "sequelize";
import db from "../config/db.js";
import Location from "./Location.js";

const Country = db.define(
  "country",
  {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    code: {
      type: DataTypes.CHAR(3),
    },
    // regionId: {
    //   field: "region_id",
    //   type: DataTypes.INTEGER,
    // },
  },
  {
    freezeTableName: true,
  }
);
Country.hasMany(Location);
Location.belongsTo(Country);
export default Country;
