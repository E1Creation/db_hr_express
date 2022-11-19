import db from "../config/db.js";
import { DataTypes } from "sequelize";
import User from "./User.js";
import Role from "./Role.js";

const UserRole = db.define(
  "user_role",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER(5),
      primaryKey: false,
    },
    roleId: {
      type: DataTypes.INTEGER(5),
      primaryKey: false,
    },
  },
  {
    freezeTableName: true,
  }
);

// UserRole.belongsTo(Role, {
//   foreignKey: "roleId",
// });
// UserRole.belongsTo(User, {
//   foreignKey: "userId",
// });
User.belongsToMany(Role, {
  through: UserRole,
});
Role.belongsToMany(User, {
  through: UserRole,
});
export default UserRole;
