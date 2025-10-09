const express = require("express");
const GenerateOtp = require("./src/Api_Functions/auth/otpGenerator");
const Verfiyotp = require("./src/Api_Functions/auth/verifyOTP");
const GetProperties = require("./src/Api_Functions/properties")
const cors = require('cors');
const {GetUser, InsertUser, UpdateUser, } = require("./src/Api_Functions/user");
const { swaggerUi, specs } = require("./src/Swagger");

const router = require('./src/Routes')

const app = express()

app.use(cors())
app.use(express.json());

app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(specs))

app.use('/api',router);

module.exports = app