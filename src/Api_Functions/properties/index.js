const db = require("../../DB connection");
const { default: getProperties, default: Properties } = require("../../Queries/properties");


async function GetProperties(params = {}) {
  debugger
  try {
    const result = await Properties.findAll({
      where: { ...params, status: true },
    });
    if (result === null || result.length === 0) {
      return { message: "Data doesn't exist" };
    }
    return {
      message: "successfully returned",
      data: result,
    };
  } catch (error) {
    return error;
  }
}

module.exports = GetProperties;
