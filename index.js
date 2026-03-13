const express = require('express');
const ParseDashboard = require('parse-dashboard');

const config = {
  apps: [],
  users: [],
  trustProxy: 1,
};

if (process.env.SERVER_URL &&
  process.env.PARSE_APP_ID &&
  process.env.APP_MASTER_KEY &&
  process.env.APP_NAME) {
  config.apps.push({
    serverURL: process.env.SERVER_URL,
    appId: process.env.PARSE_APP_ID,
    masterKey: process.env.APP_MASTER_KEY,
    appName: process.env.APP_NAME,
  });
}

if (process.env.DASHBOARD_USER &&
  process.env.DASHBOARD_PASS) {
  config.users.push({
    user: process.env.DASHBOARD_USER,
    pass: process.env.DASHBOARD_PASS,
  });
}

const dashboard = new ParseDashboard(config);

const app = express();

// make the Parse Dashboard available at /dashboard
app.use('/dashboard', dashboard);

const httpServer = require('http').createServer(app);
httpServer.listen(process.env.PORT);
