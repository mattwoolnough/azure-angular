/**
 * Express configuration
 */

'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

module.exports = function(app) {
  var env = app.get('env');

  app.set('html',  '/server/html');
  app.set('view engine', 'html');
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use('/', express.static(__dirname + '/html'));

};
