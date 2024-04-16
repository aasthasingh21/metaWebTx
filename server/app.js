const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./database/db');
const expressSession = require('express-session'); // to save users data on the server

var allRouter = require('./routes/route');
var usersRouter = require('./model/user');
const passport = require('passport');

const app = express(); 

// Authentication code
app.use(expressSession({ // will save users data on the server(session allow the data to be held/saved on the server and passport gets the data or can say handles the data)
    resave: false,
    saveUninitialized: false,
    secret: "happy me"
}));
app.use(passport.initialize()); // passport helps in making protected routes/url
app.use(passport.session()); // to hold/save passport data(user) with session
passport.serializeUser(usersRouter.serializeUser());
passport.deserializeUser(usersRouter.deserializeUser());

app.use(bodyParser.json()); // to convert data to json

app.use('/', allRouter);
app.use('/users', usersRouter);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
