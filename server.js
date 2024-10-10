require('dotenv').config();
const express = require('express');
const app = express();


//middleware usage
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//serve static assets
app.use(express.static('public'));

app.use('/sample', require('./routes/sampleRoutes'));

app.listen(3500, () => {
    console.log("Server running on Port 3500");
});