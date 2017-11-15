var router = m.express.Router();

router.get('/', function (req, res) {
    res.render('index');
});

module.exports = router;
