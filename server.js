require('dotenv').config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.set('view engine', 'ejs');

//middleware usage
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());

//serve static assets
app.use(express.static('public'));


app.use('/sample', require('./routes/sampleRoutes'));

app.listen(3500, () => {
    console.log("Server running on Port 3500");
});