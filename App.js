const express = require("express");
const GenerateOtp = require("./src/otpGenerator");
const Verfiyotp = require("./src/verifyOTP");


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


module.exports = app