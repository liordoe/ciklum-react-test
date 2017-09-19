const http = require('http');
const express = require('express');
const path = require('path');
const app = require('./server/config.js');
const dbConnect = require('./server/db-connect.js');
const router = require('./server/routes.js');

app.use(express.static(path.join(__dirname, 'public')));

// Redirect all non api requests to the index
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Starting express server
module.exports = http.createServer(app).listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});