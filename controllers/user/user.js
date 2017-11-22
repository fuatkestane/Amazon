var router = m.express.Router();
var User = require('../../models/user');

router.post('/signup', function (req, res, next) {
    var user = new User();
    user.profile.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;
    
    User.findOne({ email: req.body.email }, function (err, existingUser) {
        if (existingUser) {
            res.json(req.body.email + " is already exist.");
        } else {
            user.save(function (err, user) {
                if (err) {
                    return next(err);
                }
                res.json('New user has been created.');
                console.log(req.body);
            });
        }
    });
});

module.exports = router;