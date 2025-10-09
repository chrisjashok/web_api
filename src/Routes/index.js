const express = require("express");
const GenerateOtp = require("../Api_Functions/auth/otpGenerator");
const Verfiyotp = require("../Api_Functions/auth/verifyOTP");
const GetProperties = require("../Api_Functions/properties");
const { GetUser, InsertUser, UpdateUser } = require("../Api_Functions/user");
const router = express.Router();

/**
 * @swagger
 * /api/generateotp:
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
 *               - user_type
 *             properties:
 *               mobile_no:
 *                 type: string
 *                 example: "9876543210"
 *               user_type:
 *                 type: string
 *                 example: "user"
 *     responses:
 *       200:
 *         description: OTP generated successfully
 */

router.post("/generateotp", async (req, res) => {
  const response = await GenerateOtp(req?.body);
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

router.get("/getproperties", async (req, res) => {
  const response = await GetProperties(req?.body);
  res.send(response);
});

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
