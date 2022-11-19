import { DataTypes } from "sequelize";
import db from "../config/db.js";
import Country from "./Country.js";
import Department from "./Department.js";

const Location = db.define(
  "location",
  {
    streetAddress: {
      type: DataTypes.STRING(50),
      allowNull: false,

      field: "street_address",
    },
    city: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    stateProvince: {
      type: DataTypes.STRING(30),
      allowNull: false,
      field: "state_province",
    },
    postalCode: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      field: "postal_code",
    },
    countryId: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      field: "country_id",
    },
  },
  {
    freezeTableName: true,
  }
);
Location.hasMany(Department, {
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
  foreignKey: "location_id",
});
Department.belongsTo(Location, {
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
  foreignKey: "location_id",
});
export default Location;
