const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

router.get('/success',(req,res,next)=>{
  res.sendFile(path.join(rootDir,'views','success.html'));
})
router.post('/success', (req, res, next) => {
  res.redirect('/success');
});
module.exports = router;
