const {
  ProjectListschema,
  updatePropertySchema,
} = require("../../Api_validations/propertyListValidation");
const db = require("../../DB connection");
const {
  getPropertyLists,
  insertPropertyLists,
  default: PropertyList,
} = require("../../Queries/propertyList");

async function getPropertyList(params = {}) {
  try {
    const checkquery = [await getPropertyLists(params)];
    const checkResult = await db.query(...checkquery);
    return checkResult?.rows;
  } catch (err) {
    return err;
  }
}

async function insertPropertyList(params) {
  const { error, value } = ProjectListschema.validate(params);

  if (error) {
    const message = error.details.map((err) => err.message);
    return {
      message: `Failure, ${message}`,
      data: value,
      code: 400,
    };
  }

  try {
    const query = insertPropertyLists();
    const values = [
      value.detail_id,
      value.house_type,
      value.location,
      value.price,
      value.img,
      JSON.stringify(value.images),
      JSON.stringify(value.amenities),
    ];

    const checkResult = await db.query(query, values);

    return checkResult?.rows;
  } catch (err) {
    return err;
  }
}

async function updatedPropertyLists(params) {
  try {
    const { error, value } = updatePropertySchema.validate(params);

    if (error) {
      return {
        message: "Validation failed",
        details: error.details.map((d) => d.message),
      }
    }

    const id = params.id;

    const [updatedCount, updatedRows] = await PropertyList.update(value, {
      where: { id },
      returning: true,
    });

    if (updatedCount === 0) {
      return { message: "Property not found" };
    }

    return {
      message: "Property updated successfully",
      data: updatedRows[0],
    };
  } catch (err) {
    return err;
  }
}

module.exports = { getPropertyList, insertPropertyList, updatedPropertyLists };
