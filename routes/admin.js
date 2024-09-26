const express=require('express');
const router=express.Router();

router.get('/add-product',(req,res,next)=>{
    res.send('<html><body><form action="/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Add</button></form></body></html>');
});

router.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')
})

module.exports=router;