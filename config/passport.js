require('../global');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');


//serialize and deserialize
m.passport.serializeUser(function (user, next) {
    next(null, user._id);
});

m.passport.deserializeUser(function (id, next) {
    User.findById(id, function (err, user) {
        next(err, user);
    });
});



//Middleware
m.passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function (req, email, password, next) {
    User.findOne({ email: email }, function (err, user) {
        if (err) return next(err);

        if (!user) {
            return next(null, false, req.flash('loginMessage', 'No user has been found'));
        }

        if (!user.comparePassword(password)) {
            return next(null, false, req.flash('loginMessage', 'Oops! Wrong password'));
        }
        return next(null, user)

    });
}));


//custom function to validate
exports.isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }else{
        res.json('Error authenticate');
    }
}