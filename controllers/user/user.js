require('../../global');
var passportConf = require('../../config/passport');
var router = m.express.Router();
var User = require('../../models/user');

router.post('/signup', function (req, res, next) {
    var user = new User();
    user.profile.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;

    User.findOne({ email: req.body.email }, function (err, existingUser) {
        if (existingUser) {
            req.flash('errors', 'Account with that emai address already exists');
        } else {
            user.save(function (err, user) {
                if (err) {
                    return next(err);
                }
                res.json('New user has been created.');
            });
        }
    });
});


/* router.get('/login', function (req, res, err) {
    if (res.ok) {
        res.json({ message: req.flash('loginMessage') });
    } else {
        res.json(err);
    }
}); */

router.post('/login', m.passport.authenticate('local-login', {
    failureFlash: true // allow flash messages
}));

module.exports = router;