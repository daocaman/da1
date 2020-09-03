const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send("ahihi");
})


module.exports = app;