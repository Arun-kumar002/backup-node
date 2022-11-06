// const fast2sms=require('unirest');
const fast2sms = require('fast-two-sms');
let bodyparser=require('body-parser')
let express=require('express');
let app=express();

app.use(bodyparser.urlencoded({ extended: false }))
 
app.use(bodyparser.json())
 
 
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})
 
app.post('/sendmessage', (req, res) => {
    console.log(req.body.message)
    console.log(req.body.number)
 
    sendMessage(req.body.message,req.body.number,res)
})

app.listen(5000, () => {
  console.log("App is listening on port 5500")
})










var options={authorization:'lmLEDsGhJBSiOGS64ueNnQlRJzG1CGwSaZWDhypXANQU6QSYD9ow0TLieNLp',
message:'test otp code is  YOUR_MESSAGE_HERE-5488',
numbers:['8610159926']
};
// var options = {authorization : 'YPaavy2d2ou1a3vyhzYs9j5GYTprmpy5Rk3k6AZysfLjhVn249HIsJsJSdaU' , message : 'YOUR_MESSAGE_HERE-5488' ,  numbers : ['8610159926']} ;
fast2sms.sendMessage(options).then((response)=>{
    res.send('SMS OTP send successfully')
}).catch(err=>{
  res.send('SMS OTP some error occurs')
});
// var unirest = require("unirest");
// var req = unirest("GET", "https://www.fast2sms.com/dev/bulkV2");
// req.query({
//   "authorization": "lmLEDsGhJBSiOGS64ueNnQlRJzG1CGwSaZWDhypXANQU6QSYD9ow0TLieNLp",
//   "variables_values": 'messessage send by arun-5588',
//   "route": "otp",
//   "numbers": "8610159926"
// });
// req.headers({
//   "cache-control": "no-cache"
// });
// req.end(function (res) {
//   console.log(res.body);
// });


