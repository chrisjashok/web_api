const db = require('../../DB connection')
const { getPropertyList } = require("../../Queries/propertyList");

async function getPropertyDetail(params={}) {
  try {
    const checkquery = [await getPropertyList(params)];
    const checkResult = await db.query(...checkquery);
    return checkResult?.rows;
  } catch (err) {
    return err;
  }
}

async function insertPropertyDetail(){
    try{}catch{}
}

module.exports = {getPropertyDetail,insertPropertyDetail};
