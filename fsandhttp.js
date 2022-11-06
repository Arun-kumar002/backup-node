// normal way fs&http
// const fs=require('fs');
// const http=require('http');

// http.createServer((req,res)=>{
//     res.writeHead(200,'ok',{'content-type':'text/html'});
//     fs.readFile('index.txt','utf-8',(err,data)=>{
//         if(err) throw err;
//         res.end(data)
//     })
// }).listen(5000,err=>{
//     if(err) throw err;
//     console.log('port is listen 5000');
// })

//read stream way
// const fs=require('fs');
// const http=require('http');
// let readstream=fs.createReadStream('index.txt','utf-8')
// http.createServer((req,res)=>{
//     res.writeHead(200,'ok',{'content-type':'text/html'});
    

//     readstream.on("data",chunk=>{
//         if(!chunk){
//             console.error('no data')
//         }else{
//             res.end(chunk)
//         }
//     })
// }).listen(5000,err=>{
//     if(err) throw err;
//     console.log('port is listen 5000');
// })
//promise way
// const fs=require('node:fs/promises');
//  const http=require('http');

//  http.createServer(async(req,res)=>{
//          res.writeHead(200,'ok',{'content-type':'text/html'})
//         let data=await fs.readFile('index.txt','utf-8');
//         res.end(data)

//  }).listen(4200,err=>{
//     if(err) throw err;
//     console.log('port is listen 4200');
//  })

//duplex way
const fs=require('fs');
const http=require('http');
// http.createServer((req,res)=>{
//     res.writeHead(200,'ok',{'content-type':'text/html'});
//     fs.createReadStream('index.txt','utf-8').pipe(res)
// }).listen(4200,err=>{
//        if(err) throw err;
//        console.log('port is listen 4200');
//     });

//css append in server
// http.createServer((req,res)=>{
//     if(req.url==='/' || req.url===''){
//         res.writeHead(200,'ok',{'content-type':'text/html'})
//         fs.createReadStream('index.html').pipe(res)
//     }
//     else if(req.url==='/style.css'){
//         res.writeHead(200,'ok',{'content-type':'text/css'})
//         fs.createReadStream('style.css').pipe(res)
//     }else{
//         res.writeHead(200,'ok',{'content-type':'text/html'})
//         fs.createReadStream('404found.html').pipe(res)
//     }
// }
// ).listen(5000,err=>{
//     if(err) throw err;
//     console.log('port listen 5000');
// })

//IMG adding server
http.createServer((req,res)=>{
    if(req.url==='/' || req.url===''){
        res.writeHead(200,'ok',{'content-type':'text/html'})
        fs.createReadStream('index.html').pipe(res)
    }
    else if(req.url==='/style.css'){
        res.writeHead(200,'ok',{'content-type':'text/css'})
        fs.createReadStream('style.css').pipe(res)
    }
    else if(req.url==='/photo.jpg'){
        res.writeHead(200,'ok',{'content-type':'images/jpg'})
      let pics= fs.readFileSync('photo.jpg')
      res.end(pics)
    }
    else{
        res.writeHead(200,'ok',{'content-type':'text/html'})
        fs.createReadStream('404found.html').pipe(res)
    }
}
).listen(5000,err=>{
    if(err) throw err;
    console.log('port listen 5000');
})