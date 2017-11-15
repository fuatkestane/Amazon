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
m.app.set('controllers', __dirname + '/controllers');
// m.app.use(m.express.static(m.path.join(__dirname,'client')));

//Controllers import
m.app.use('/', require("./controllers/index"));
m.app.use('/user', require("./controllers/user/user"));

//Create Server
m.app.listen(3000, function (err) {
    if (err) throw err;
    console.log("Server is running...");
});