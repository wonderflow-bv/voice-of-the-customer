#! /usr/bin/env node
 /* eslint no-console: "warn" */

'use strict';

require('dot-env');

// Deployment tracking
require('cf-deployment-tracker-client').track();

var server = require('./app');
var port = process.env.PORT || process.env.VCAP_APP_PORT || 3000;

server.listen(port, function() {
  console.log('Server running on port: %d', port);
});
