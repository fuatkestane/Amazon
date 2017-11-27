require('./global');
var secret = require('./config/secret');
var MongoStore = require('connect-mongo')(m.session);
m.mongoose.Promise = global.Promise;

//Connection with MongoLab
/* m.mongoose.connect("mongodb://root:abc123@ds261745.mlab.com:61745/ecommerce", function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to the database");
    }
}); */

//Connection with Local MongoDB
m.mongoose.connect(secret.database, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to the database");
    }
});

//Middleware
m.app.use(m.morgan('dev'));
m.app.use(m.bodyParser.json());
m.app.use(m.bodyParser.urlencoded({ extended: true }));
m.app.use(m.cookieParser());
m.app.use(m.session({
    resave: true,
    saveUninitialized: true,
    secret: secret.secretKey,
    store: new MongoStore({ url: secret.database, autoReconnect: true })
}));
m.app.use(m.flash());
m.app.use(m.passport.initialize());

//Controllers import
m.app.use('/user', require("./controllers/user/user"));

//Create Server
m.app.listen(secret.port, function (err) {
    if (err) throw err;
    console.log("Server is running port: " + secret.port);
});