let fs=require("fs");

//append file
// fs.appendFileSync('index.txt','good boy');
// fs.appendFile('index.txt','good boy',err=>{
//     if(err) throw err
//     console.log('sucess');
// })

//rename file
// fs.rename('.index.txt','rename.html',err=>{
//     if(err) throw err;
//     console.log('renamed successfully');
// })
// fs.rename('.index.txt','rename.html').then(data=>{
//           console.log('data')
         
// }).catch(err=>console.log(err))
// fs.open('index.html','r+',0o666,(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// })
// fs.stat('index.html',(err,info)=>{
//     if(err) throw err;
//     console.log(info);
// })

// fs.chmod('index.html',777,gid,callback)
// fs.chown

//important
//create a stream
let readstream=fs.createReadStream('index.txt',{encoding:'utf-8',start:0,end:80});
//create write stream
let writeStream=fs.createWriteStream('read.html',{encoding:'utf-8'});
//read stream of data with the help of node js
readstream.on('data',(data)=>{
   //ex
//    let arr=data.split(' ').reverse(' ').join('');
let arr=data.toUpperCase()

   console.log(arr);
    writeStream.write(data.toLowerCase(),err=>{
        if(err) throw console.err;
        console.log('writed successfully');
    })
})
