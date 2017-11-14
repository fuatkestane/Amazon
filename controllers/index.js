require('./global');

m.app.get('/', function (req, res) {
    res.render('index');
});
