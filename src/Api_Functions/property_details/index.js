import PropertyDetail from "../../Queries/propertyDetail.js";

export async function getPropertyDetails(params) {
  try {
    const result = await PropertyDetail.findAll({
      where: {...params,status:true},
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

