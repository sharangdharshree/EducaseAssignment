import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

// schools table
// id (Primary Key)
// name (VARCHAR)
// address (VARCHAR)
// latitude (FLOAT)
// longitude (FLOAT)

class School extends Model {}

School.init(
  // table schema as per specification
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  // options
  {
    sequelize,
    timestamps: true,
    modelName: "School",
    tableName: "schools",
  }
);

export default School;
