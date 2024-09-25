const http=require('http');
const server=http.createServer((req,res)=>{
    console.log('Hello, Mahi here')
});
server.listen(4000);
