require('./global');

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
m.mongoose.connect("mongodb://localhost:27017/ecommerce", function (err) {
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

// Send all other requests to the Angular app
m.app.get('*', (req, res) => {
    res.sendFile(m.path.join(__dirname, 'client/src/index.html'));
});

//Controllers import
m.app.use('/user', require("./controllers/user/user"));

//Create Server
m.app.listen(5555, function (err) {
    if (err) throw err;
    console.log("Server is running...");
});