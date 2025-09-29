const express = require("express");
const GenerateOtp = require("./src/Api_Functions/auth/otpGenerator");
const Verfiyotp = require("./src/Api_Functions/auth/verifyOTP");
const GetProperties = require("./src/Api_Functions/properties")

const app = express()

app.use(express.json());


app.get('/generateotp', async(req,res)=>{
   const response = await GenerateOtp(req?.body)
    res.send(response);
});

app.post('/verifyotp', async(req,res)=>{
   const response = await Verfiyotp(req?.body)
    res.send(response);
});

app.get('/getproperties',async(req,res)=>{
    const response = await GetProperties(req?.body)
    res.send(response);
})


module.exports = app