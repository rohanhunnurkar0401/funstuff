var express = require('express');
var router  = express.Router();
var path = require('path');

module.exports = router;

router.get('/', function (req,res){
   // res.send('Hello World');
   //res.sendFile(path.join(__dirname, '../index.html' ));
   res.render('pages/index');
}
);

router.get('/about', function(req,res){
    //res.sendFile(path.join(__dirname, '../about.html' ));
    res.render('pages/about');
});

router.get('/contact');
router.post('/contact');