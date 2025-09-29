const db = require('../../DB connection');
const { getProperties } = require('../../Queries/properties')

async function GetProperties(params) {
    try {
        const checkquery = [await getProperties(params)]
        const checkResult = await db.query(...checkquery)
        const data = checkResult?.rows
        return data;
    } catch (err) {
        return err
    }
}

module.exports = GetProperties