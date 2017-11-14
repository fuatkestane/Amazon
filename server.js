var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var engine = require('ejs-mate');

var app = express();


var User = require('./models/user');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://root:abc123@ds261745.mlab.com:61745/ecommerce", function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to the database");
    }
});

//Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.engine('ejs', engine);

app.set('view engine', 'ejs');


app.post('/create-user', function (req, res, next) {
    var user = new User();

    user.profile.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;

    user.save(function (err) {
        if (err) return next(err);
        res.json("Successfully created a new user.");
    });
});

app.get('/', function (req, res) {
    res.render('home');
});


app.listen(3000, function (err) {
    if (err) throw err;
    console.log("Server is running...");
});