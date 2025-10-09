const express = require("express");
const GenerateOtp = require("../Api_Functions/auth/otpGenerator");
const Verfiyotp = require("../Api_Functions/auth/verifyOTP");
const GetProperties = require("../Api_Functions/properties");
const { GetUser, InsertUser, UpdateUser } = require("../Api_Functions/user");
const router = express.Router();



/**
 * @swagger
 * /api/generateotp:
 *   get:
 *     summary: Get properties by mobile number
 *     parameters:
 *       - in: query
 *         name: mobile_no
 *         required: true
 *         schema:
 *           type: string
 *           example: "9876543210"
 *       - in: query
 *         name: user_type
 *         required: true
 *         schema:
 *           type: string
 *           example: "user"
 *     responses:
 *       200:
 *         description: Properties retrieved successfully
 */

router.get("/generateotp", async (req, res) => {
  const{mobile_no,user_type} = req?.query
  const response = await GenerateOtp({mobile_no,user_type});
  res.send(response);
});

/**
 * @swagger
 * /api/verifyotp:
 *   post:
 *     summary: Generate an OTP
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - mobile_no
 *               - otp
 *             properties:
 *               mobile_no:
 *                 type: string
 *                 example: "9876543210"
 *               otp:
 *                 type: integer
 *                 example: "123456"
 *     responses:
 *       200:
 *         description: OTP generated successfully
 */

router.post("/verifyotp", async (req, res) => {
  const response = await Verfiyotp(req?.body);
  res.send(response);
});

/**
 * @swagger
 * /api/getproperties:
 *   get:
 *     summary: verify OTP 
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 0
 *     responses:
 *       200:
 *         description: Properties retrieved successfully
 */

router.get("/getproperties", async (req, res) => {
  const response = await GetProperties(req?.body);
  res.send(response);
});

/**
 * @swagger
 * /api/getuser:
 *   get:
 *     summary: Get all user
 
 *     responses:
 *       200:
 *         description: Properties retrieved successfully
 */

router.get("/getuser", async (req, res) => {
  const response = await GetUser(req?.body);
  res.send(response);
});

router.post("/postuser", async (req, res) => {
  const response = await InsertUser(req?.body);
  res.send(response);
});

router.put("/updateuser", async (req, res) => {
  const response = await UpdateUser(req?.body);
  res.send(response);
});

module.exports = router;
