import { DataTypes } from "sequelize"
import sequelize from "../DB connection/db.js";

// export function getProperties(params) {
//     let query = 'select * from properties'
//     query += ' where status = true'
//     if (params.id) {
//         query += ` and id=${params.id}`
//     }
//     return query
// }

const Properties = sequelize.define("Properties",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    banner_img: DataTypes.STRING,
    campus_amenities: DataTypes.JSONB,
    amenities:DataTypes.JSONB,
    location:DataTypes.JSONB,
},{
  tableName: "properties",
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
})


export default Properties;