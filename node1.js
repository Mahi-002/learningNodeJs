const http = require('http');
const express = require('express');
const bodyParser=require('body-parser');

const app=express();

app.use('/',(req,res,next)=>{
    console.log("this always runs!");
    next();
})

app.use(bodyParser.urlencoded({extended: false}))

app.use('/add-product',(req,res,next)=>{
    console.log("In another middleware");
    res.send('<html><body><form action="/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Add</button></form></body></html>');
});

app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')
})

app.use('/',(req,res,next)=>{
    res.send('<h1>Hello from express!</h1>');
});

const server = http.createServer(app);


server.listen(4000, () => {
    console.log('Server is listening on port 4000');
});
