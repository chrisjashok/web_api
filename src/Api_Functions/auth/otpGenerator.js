// const { encrypt } = require("./Cipher/encryption");
// const db = require("./DB connection");
// const { getauth, createauth, updateauth } = require("./Queries/auth");


// async function GenerateOtp(params) {
//     let { mobile_no, user_type } = params
//     // const query = 'SELECT mobile_no from properties'
//     // const value = [1]
//     try {
//         debugger
//         let checkquery = [await getauth(), [mobile_no]]
//         const checkResult = await db.query(...checkquery)


//         params.otp = Math.floor(100000 + Math.random() * 900000)

//         const token = encrypt(params)


//         if (checkResult?.rows?.length > 0) {
//             const updateQuery = await updateauth()
//             await db.query(updateQuery, [token?.encryptedData, mobile_no]);
//         } else {
//             // let createQuery = (await )
//             await db.query(createauth(), [token?.encryptedData, mobile_no, user_type])
//         }

//         return { mobile_no: mobile_no, otp: params.otp, user_type: user_type }
//     } catch (err) {
//         console.log(err)
//     }

// }


// module.exports = GenerateOtp

const { encrypt } = require("../../Cipher/encryption");
const db = require("../../DB connection");
const { getauth, createauth, updateauth } = require("../../Queries/auth");

async function GenerateOtp(params) {
  const { mobile_no, user_type } = params;

  try {
    // Step 1: Get query and values
    const getAuthQuery = await getauth();
    const checkResult = await db.query(getAuthQuery, [mobile_no]);

    // Step 2: Generate OTP and encrypt
    params.otp = Math.floor(100000 + Math.random() * 900000);
    const token = encrypt(params);

    // Step 3: Update or Insert
    if (checkResult?.rows?.length > 0) {
      const updateQuery = await updateauth();
      await db.query(updateQuery, [token.encryptedData, mobile_no]);
    } else {
      const createQuery = await createauth();
      await db.query(createQuery, [token.encryptedData, mobile_no, user_type]);
    }

    // Step 4: Return
    return {
      mobile_no,
      otp: params.otp,
      user_type
    };
  } catch (err) {
    console.error('❌ GenerateOtp error:', err);
    throw err;
  }
}

module.exports = GenerateOtp;
