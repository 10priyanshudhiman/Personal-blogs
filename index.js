const express  = require('express');
const mongoose = require('mongoose');
const keys = require ('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

require('./models/User');
require('./models/Survey');
require('./services/passport');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI,{ useNewUrlParser: true});


const app = express();

app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000,
        keys: [keys.cookieKey]
    })
);
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  });


require('./routes/authRoutes')(app);
require('./routes/surveyRoutes')(app);
if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assests
    // like our main.js or main.css
    app.use(express.static('client/build'));
     
    //Express will serve up the index.html file
    // if it doesn't recognize the route
    const path  = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

    });
}


const PORT = process.env.PORT||5000;
app.listen(PORT);


