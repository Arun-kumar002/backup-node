const request=require('request')
const http=require('http')
const parser1=require('querystring')


http.createServer(
  (req,res)=>{
    if(req.method==='POST' && req.url==='/'){
      res.writeHead(200,'ok',{"content-type":"application/json"})
      console.log(parser1.stringify(req));
      res.end('ok')
    }
    
  }

).listen(5000,_=>{
  console.log('port listen 5000');
})