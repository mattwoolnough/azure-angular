/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 5000;
var express = require('express');

// Setup server
var app = express();
var server = require('http').createServer(app);
require('./express')(app);

// Start server
server.listen(port, "0.0.0.0", function () {
  console.log('Express server listening on %d, in %s mode', port, 'prod');
});

// Expose app
exports = module.exports = app;
