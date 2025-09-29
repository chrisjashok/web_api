const { decrypt } = require("../../Cipher/decryption")
const db = require("../../DB connection");
const { getauth } = require("../../Queries/auth")

async function Verfiyotp(params) {
    try {
        let checkquery = [await getauth(), [params?.mobile_no]]
        const checkResult = await db.query(...checkquery)
        const data = checkResult?.rows[0]?.token
        let result = decrypt(data)
        if (result?.otp === params?.otp) {
            result.authentication = true;
            result.token = data;
            return result
        } else {
            result.authentication = 'false'
            return result
        }

    } catch (err) {
        return err
    }

}

module.exports = Verfiyotp