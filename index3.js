const fast2sms = require('fast-two-sms')
var express = require('express')
const bodyparser = require('body-parser')
 
const app = express()
 
app.use(bodyparser.urlencoded({ extended:false }))
app.use(bodyparser.json())
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
    console.log(req.body.number);
})
 
// app.post('/sendmessage', (req, res) => {
//  var options = {
//     authorization:
//       "lmLEDsGhJBSiOGS64ueNnQlRJzG1CGwSaZWDhypXANQU6QSYD9ow0TLieNLp",
//     message:'5589-otp for login',
//     numbers: [req.body.number],
//   };

 

//   fast2sms
//     .sendMessage(options)
//     .then((response) => {
//      console.log(response);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// })
 

    

 
app.listen(5500, () => {
        console.log("App is listening on port 5500")
    })