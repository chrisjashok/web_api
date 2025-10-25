import { DataTypes } from "sequelize";
import sequelize from "../DB connection/db.js";


export function getPropertyLists(params) {
  let query = "select * from property_list";
  query += " where status = true ";
  if (params.id) {
    query += `and id=${params?.id}`;
  }
  if (params.detail_id) {
    query += `and detail_id=${params?.detail_id}`;
  }
  if (params.location) {
    query += `and location='${params?.location}'`;
  }
  if (params.price) {
    query += `and price='${params?.price}'`;
  }
  if (params.house_type) {
    query += `and house_type='${params?.house_type}'`;
  }
  return query;
}

export function insertPropertyLists() {
  const query = `
    INSERT INTO property_list (
      detail_id, 
      house_type, 
      "location", 
      price, 
      img, 
      images, 
      amenities, 
      created_at, 
      created_by, 
      updated_at, 
      updated_by, 
      visibility,
      status
    )
    VALUES($1, $2, $3, $4, $5, $6, $7, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, true,true)
    RETURNING *;
  `;
  return query;
}


const PropertyList = sequelize.define("PropertyList", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  detail_id: DataTypes.INTEGER,
  house_type: DataTypes.STRING,
  location: DataTypes.STRING,
  price: DataTypes.STRING,
  img: DataTypes.STRING,
  images: DataTypes.JSONB,
  amenities: DataTypes.JSONB,
  visibility: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}, {
  tableName: "property_list",
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
});

export default PropertyList;


