const express = require("express");
const GenerateOtp = require("../Api_Functions/auth/otpGenerator");
const Verfiyotp = require("../Api_Functions/auth/verifyOTP");
const GetProperties = require("../Api_Functions/properties");
const { GetUser, InsertUser, UpdateUser } = require("../Api_Functions/user");
const {
  insertPropertyList,
  getPropertyList,
  updatedPropertyLists,
} = require("../Api_Functions/property_list");
const router = express.Router();

/**
 * @swagger
 * /api/generateotp:
 *   get:
 *     summary: Get properties by mobile number
 *     tags: [Auth]
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
  const { mobile_no, user_type } = req?.query;
  const response = await GenerateOtp({ mobile_no, user_type });
  res.send(response);
});

/**
 * @swagger
 * /api/verifyotp:
 *   post:
 *     summary: Generate an OTP
 *     tags: [Auth]
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
 *     tags: [User]
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
  const response = await GetProperties(req?.query);
  res.send(response);
});

/**
 * @swagger
 * /api/getuser:
 *   get:
 *     summary: Get all user
 *     tags: [User]
 *     parameters:
 *       - in: query
 *         name: id
 *         required: false
 *         schema:
 *           type: integer
 *           example: 0
 *       - in: query
 *         name: name
 *         required: false
 *         schema:
 *           type: string
 *           example: "chris"
 *       - in: query
 *         name: email
 *         required: false
 *         schema:
 *           type: string
 *           example: "chris@gmail.com"
 *     responses:
 *       200:
 *         description: Properties retrieved successfully
 */

router.get("/getuser", async (req, res) => {
  debugger;
  const response = await GetUser(req?.query);
  res.send(response);
});

/**
 * @swagger
 * /api/postuser:
 *   post:
 *     summary: 
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - mobile_no
 *               - email
 *             properties:
 *               name:
 *                 type: string
 *                 example: "chris"
 *               mobile_no:
 *                 type: string
 *                 example: "9487842846"
 *               email:
 *                 type: string
 *                 example: "9487842846"
 *     responses:
 *       200:
 *         description: OTP generated successfully
 */

router.post("/postuser", async (req, res) => {
  const response = await InsertUser(req?.body);
  res.send(response);
});

router.put("/updateuser", async (req, res) => {
  const response = await UpdateUser(req?.body);
  res.send(response);
});

/**
 * @swagger
 * /api/getprojectlist:
 *   get:
 *     summary: get project list
 *     description: api for getting properties.
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: integer
 *         required: false
 *         description: Unique id
 *         example: "1"
 *       - in: query
 *         name: detail_id
 *         schema:
 *           type: integer
 *         required: false
 *         description: Unique id for details
 *         example: 1
 *       - in: query
 *         name: house_type
 *         schema:
 *           type: string
 *         required: false
 *         description: house_type
 *         example: "1 BHK"
 *     responses:
 *       200:
 *         description: OTP verified successfully
 *       400:
 *         description: Invalid or missing parameters
 */

router.get("/getprojectlist", async (req, res) => {
  const response = await getPropertyList(req?.query);
  res.status(200).send(response);
});

/**
 * @swagger
 * /api/postprojectlist:
 *   post:
 *     summary: Add a new property
 *     description: API to insert a new property into the property list.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - detail_id
 *               - house_type
 *               - location
 *               - price
 *               - img
 *               - visibility
 *             properties:
 *               detail_id:
 *                 type: integer
 *                 example: 1
 *               house_type:
 *                 type: string
 *                 example: "1 BHK"
 *               location:
 *                 type: string
 *                 example: "Vadapalani"
 *               price:
 *                 type: string
 *                 example: "20 Lakhs"
 *               img:
 *                 type: string
 *                 format: url
 *                 example: "https://github.com/chrisjashok/assets/blob/main/images/kitchen.webp?raw=true"
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: []
 *               amenities:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: []
 *               visibility:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Property inserted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *       400:
 *         description: Invalid input
 */

router.post("/postprojectlist", async (req, res) => {
  const response = await insertPropertyList(req?.body);
  res.send(response);
});

/**
 * @swagger
 * /api/updateprojectlist:id:
 *   put:
 *     summary: Update an existing property
 *     description: API to update a property in the property list.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id       # the primary key of the property to update
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 1
 *               detail_id:
 *                 type: integer
 *                 example: 2
 *               house_type:
 *                 type: string
 *                 example: "2 BHK"
 *               location:
 *                 type: string
 *                 example: "Vadapalani"
 *               price:
 *                 type: string
 *                 example: "25 Lakhs"
 *               img:
 *                 type: string
 *                 format: url
 *                 example: "https://github.com/chrisjashok/assets/blob/main/images/kitchen.webp?raw=true"
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: []
 *               amenities:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: []
 *               visibility:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Property updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Property not found
 */

router.put("/updatedprojectlist", async (req, res) => {
  const response = await updatedPropertyLists(req?.body);
  res.send(response);
});

router.get("/propertydetails", async (req, res) => {});

module.exports = router;
