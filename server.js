var express = require('express');
var app = express();
var expressLayouts = require('express-ejs-layouts'); 
var port = 8080;

app.set('view engine', 'ejs');
app.use(expressLayouts);

var router = require('./app/routes');
app.use('/', router);
app.use(express.static('public'));
app.listen(port, function() {
    console.log ('Application has started');
});
