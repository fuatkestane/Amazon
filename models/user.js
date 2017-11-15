/* The user schema attributes/characteristics/fields */

require('../global');

var UserSchema = new m.mongoose.Schema({
    "email": { type: String, unique: true, lowercase: true },
    "password": String,
    "profile": {
        "name": { type: String, default: "" },
        "picture": { type: String, default: "" }
    },
    "address": String,
    "history": [{
        "date": Date,
        "paid": { type: Number, default: 0 },
        // "item":{type:Schema.Types.ObjectId, ref:''}
    }]
}, {
        versionKey: false
    });


/* Hash the password before we even save it to the database */

UserSchema.pre('save', function (next) {
    var user = this;
    if (!user.isModified('password')) return next();
    m.bcrypt.genSalt(10, function (err, salt) {
        if (err) return next(err);
        m.bcrypt.hash(user.password, salt, null, function (err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});


/* Compare password in the database and the one that the user type in */

UserSchema.methods.comparePassword = function (password) {
    return m.bcrypt.compareSync(password, this.password);
}

module.exports = m.mongoose.model("User", UserSchema);