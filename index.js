const express  = require('express');
const mongoose = require('mongoose');
const keys = require ('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');

require('./models/User');

require('./services/passport');


mongoose.connect(keys.mongoURI,{ useNewUrlParser: true});


const app = express();

app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());


require('./routes/authRoutes')(app);


const PORT = process.env.PORT||5000;
app.listen(PORT);


// 934764003681-llv1nn37hm959ht2fv3gg31c6jodgj8o.apps.googleusercontent.com
// cHzHFHgEUaRJzSHFvRUIUF-w
// mongodb+srv://Priyanshu:priyanshu310@cluster0.b9sve.mongodb.net/personalblogDB
// sdfskjfsbfskfsbfsldfnsbfsnfbfsndfnfsd