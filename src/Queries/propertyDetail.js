import { DataTypes } from "sequelize";
import sequelize from "../DB connection/db.js";

const PropertyDetail = sequelize.define("PropertyDetail", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  images: DataTypes.JSONB,
  highlights: DataTypes.JSONB,
  prop_content: DataTypes.STRING,
  owner_id: DataTypes.INTEGER,
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  created_by: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updated_by: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
},{
  tableName: 'property_detail', 
  timestamps: false, 
});


export default PropertyDetail