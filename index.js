var express = require('express');
var ParseDashboard = require('parse-dashboard');


var config  = {
  "apps": [
    // hardcoded apps
  ],
  "users": [
    // hardcoded users
  ],
  "trustProxy": 1
};

if (process.env.SERVER_URL &&
  process.env.PARSE_APP_ID &&
  process.env.APP_MASTER_KEY &&
  process.env.APP_NAME) {
    config.apps.push({
      "serverURL": process.env.SERVER_URL,
      "appId": process.env.PARSE_APP_ID,
      "masterKey": process.env.APP_MASTER_KEY,
      "appName": process.env.APP_NAME
    });
}

if (process.env.DASHBOARD_USER &&
  process.env.DASHBOARD_PASS) {
    config.users.push( {
      "user": process.env.DASHBOARD_USER,
      "pass":  process.env.DASHBOARD_PASS,
    });
  }

var dashboard = new ParseDashboard(config);

var app = express();

// make the Parse Dashboard available at /dashboard
app.use('/dashboard', dashboard);

var httpServer = require('http').createServer(app);
httpServer.listen(process.env.PORT);