const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.set('port', process.env.PORT || 8000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

module.exports = app;
module.exports.mongoURI = "mongodb://localhost/articles";
module.exports.mongoOptions = {
    useMongoClient: true
};