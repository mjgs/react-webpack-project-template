// server.js
var express = require('express');
var path = require('path');
var compression = require('compression');

var app = express();

app.use(compression());

// Serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'public')));

// Send all requests to index.html so browserHistory in React Router works
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

var PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
  /*eslint no-console: ["error", { allow: ["log"] }] */
  console.log('Production Express server running at localhost:' + PORT);
});
