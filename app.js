var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var hbs = require('express-handlebars');
var favicon = require('serve-favicon');

//require routes
var routes = require('./routes/index');

var app = express();

app.use(favicon(__dirname + '/public/cloud.ico'));

//view engine set-up
app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'main',
  layoutsDir: __dirname + '/views/layouts/',
  partialsDir: __dirname + '/views/partials/'
}));

// server .hbs templates from views with res.render
app.set('views', path.join(__dirname, 'views'));


// Use Handlebars syntax {{ }}
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//apply the routes to our app
app.use('/', routes);

var port = process.env.PORT || 3000
app.listen(port, function(){
  console.log("listening on port " + port);
});

// module.exports = app;
