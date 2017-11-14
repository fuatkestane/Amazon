require('./global');

m.mongoose.Promise = global.Promise;
m.mongoose.connect("mongodb://root:abc123@ds261745.mlab.com:61745/ecommerce", function (err) {
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

//ViewEngine
m.app.engine('html', m.cons.swig);
m.app.set('view engine', 'html');
m.app.set('views', __dirname + '/views');

//Create Server
m.app.listen(3000, function (err) {
    if (err) throw err;
    console.log("Server is running...");
});