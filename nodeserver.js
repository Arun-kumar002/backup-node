let http=require('http');
let server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('content-type','text/html');
    res.end('hai arun')
})

server.listen(4000,err=>{
    if(err) throw  err;
    console.log('app is listening port 4000');
})

