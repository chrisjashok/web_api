const Joi = require("joi");

const schema = Joi.defaults((schema) => {
  switch (schema.type) {
    case "string":
      return schema.trim();
    default:
      return schema;
  }
});

const ProjectListschema = schema.object({
  detail_id: schema.number().required(),
  house_type: schema.string().required(),
  location: schema.string().required(),
  price: schema.string().allow(""),
  img: schema.string().required(),
  images:schema.array().allow(),
  amenities:schema.array().allow(),
  visibility: schema.bool().sensitive().required(),
});


const updatePropertySchema = Joi.object({
  id: schema.number().integer(),
  detail_id: schema.number().integer(),
  house_type: schema.string(),
  location: schema.string(),
  price: schema.string(),
  img: schema.string().uri(),
  images: schema.array().items(Joi.string()),
  amenities: schema.array().items(Joi.string()),
  visibility: schema.boolean(),
  status: schema.boolean(),
})
  .min(1) // at least one field must be provided
  .unknown(false); // reject any fields not defined in schema



module.exports = {ProjectListschema, updatePropertySchema}


