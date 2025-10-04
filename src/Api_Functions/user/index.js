const { getUserquery, insertUserquery, updateUserquery } = require('../../Queries/user')
const db = require('../../DB connection');
const { userSchema } = require('../../Api_validations/userValidation');


async function GetUser(params = {}) {
    try {
        const checkquery = [await getUserquery(params)]
        const checkResult = await db.query(...checkquery)
        return checkResult?.rows
    } catch (err) {
        return err
    }
}

async function InsertUser(params) {
    const { error, value } = userSchema.validate(params)
    console.log('error', error, value)
    const { name, mobile_no, email, preference } = params;
    try {
        const checkquery = await insertUserquery()
        if (error) {
            const message = error.details.map(err => err.message);
            return {
                message: `Failure, ${message} `,
                data: value,
                code: 400
            }
        } else {
            await db.query(checkquery, [name, mobile_no, email, preference])
            return {
                message: 'success',
                data: value,
                code: 200
            }

        }
    } catch (err) {
        return {
            message: 'Failure',
            data: params,
            error: err,
            code: 400
        }
    }
}

async function UpdateUser(params) {
    debugger
    try {
        const checkquery = await updateUserquery(params)
        const checkResult = await db.query(checkquery)
        return checkResult?.rows
    } catch (err) {
        return err

    }
}

module.exports = { GetUser, InsertUser, UpdateUser };
