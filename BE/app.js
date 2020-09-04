const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res)=>{
    res.send("ahihi");
})

const user = require('./routes/user.js');
app.use('/user', user);

const job = require('./routes/job.js');
app.use('/job', job);

module.exports = app;