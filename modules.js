module.exports = {
    'express': require('express'),
    'app': require('express')(),
    'morgan': require('morgan'),
    'mongoose': require('mongoose'),
    'bodyParser': require('body-parser'),
    'session': require('express-session'),
    'flash':require('express-flash'),
    'cookieParser':require('cookie-parser'),
    'cons': require('consolidate'),
    'bcrypt': require('bcrypt-nodejs'),
    'router': require('router'),
    'path': require('path'),
    'passport':require('passport')    
};