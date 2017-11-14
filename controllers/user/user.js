require('./global');


m.app.post('/create-user', function (req, res, next) {
    var user = new User();

    user.profile.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;

    user.save(function (err) {
        if (err) return next(err);
        res.json("Successfully created a new user.");
    });
});


