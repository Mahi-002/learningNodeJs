const http=require('http');
const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type', 'text/plain');
    if (req.url === '/home') {
        res.write('Welcome home');
      } else if (req.url === '/about') {
        res.write('Welcome to About Us page');
      } else if (req.url === '/node') {
        res.write('Welcome to my Node Js project');
      } else {
        res.write('404 Not Found');  
      }
      res.end();
});
server.listen(4000);
