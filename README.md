# Parse Dashboard Example on Clever Cloud
[![Clever Cloud - PaaS](https://img.shields.io/badge/Clever%20Cloud-PaaS-orange)](https://clever-cloud.com)

This is a companion application to the [parse-server-example](https://github.com/CleverCloud/parse-server-example) project. It runs [Parse Dashboard](https://github.com/parse-community/parse-dashboard) on [Clever Cloud](https://clever-cloud.com/), providing a web UI to manage your Parse Server data.

## About the Application

This application mounts Parse Dashboard on an Express.js server and exposes it at the `/dashboard` route. It is designed to connect to a Parse Server deployed on Clever Cloud using the [parse-server-example](https://github.com/CleverCloud/parse-server-example) project. You must deploy that project first, then link it to this dashboard using `clever service link-app`.

## Technology Stack

- [Express.js 5](https://expressjs.com/) - Web framework for Node.js
- [Parse Dashboard 9](https://github.com/parse-community/parse-dashboard) - Web-based management tool for Parse Server
- Node.js 24+

## Prerequisites

- Node.js 24+
- npm
- A running instance of [parse-server-example](https://github.com/CleverCloud/parse-server-example) deployed on Clever Cloud

## Running the Application Locally

```bash
npm install
npm start
```

The dashboard will be accessible at http://localhost:8080/dashboard.

> The application requires the following environment variables to be set:

| Variable | Description |
|----------|-------------|
| `PORT` | Port to listen on |
| `SERVER_URL` | URL of your Parse Server instance |
| `PARSE_APP_ID` | Application ID configured on your Parse Server |
| `APP_MASTER_KEY` | Master key configured on your Parse Server |
| `APP_NAME` | Display name for the app in the dashboard |
| `DASHBOARD_USER` | Username for dashboard authentication |
| `DASHBOARD_PASS` | Password for dashboard authentication |

## Deploying on Clever Cloud

You have two options to deploy your application on Clever Cloud: using the Web Console or using the Clever Tools CLI.

### Option 1: Deploy using the Web Console

#### 1. Create an account on Clever Cloud

If you don't already have an account, go to the [Clever Cloud console](https://console.clever-cloud.com/) and follow the registration instructions.

#### 2. Set up your application on Clever Cloud

1. Log in to the [Clever Cloud console](https://console.clever-cloud.com/)
2. Click on "Create" and select "An application"
3. Choose "Node.js" as the runtime environment
4. Configure your application settings (name, region, etc.)

#### 3. Link and configure environment variables

1. In your application's dashboard, go to "Service dependencies"
2. Link your [parse-server-example](https://github.com/CleverCloud/parse-server-example) application to expose its environment variables (`SERVER_URL`, `PARSE_APP_ID`, `APP_MASTER_KEY`, `APP_NAME`)
3. Go to "Environment variables" and set `DASHBOARD_USER` and `DASHBOARD_PASS` for dashboard authentication

#### 4. Deploy Your Application

You can deploy your application using Git:

```bash
# Add Clever Cloud as a remote repository
git remote add clever git+ssh://git@push-par-clevercloud-customers.services.clever-cloud.com/app_<your-app-id>.git

# Push your code to deploy
git push clever master
```

### Option 2: Deploy using Clever Tools CLI

#### 1. Install Clever Tools

Install the Clever Tools CLI following the [official documentation](https://www.clever-cloud.com/doc/clever-tools/getting_started/):

```bash
# Using npm
npm install -g clever-tools

# Or using Homebrew (macOS)
brew install clever-tools
```

#### 2. Log in to your Clever Cloud account

```bash
clever login
```

#### 3. Create a new application

```bash
# Initialize the current directory as a Clever Cloud application
clever create --type node <YOUR_APP_NAME>
```

#### 4. Link to your parse-server-example application

Link the Parse Server application you deployed using [parse-server-example](https://github.com/CleverCloud/parse-server-example). Replace `<YOUR_PARSE_SERVE_APP_NAME>` with the name you gave it during deployment:

```bash
clever service link-app <YOUR_PARSE_SERVE_APP_NAME>
```

This automatically exposes the Parse Server's environment variables (`SERVER_URL`, `PARSE_APP_ID`, `APP_MASTER_KEY`, `APP_NAME`) to this dashboard application.

#### 5. Set environment variables

```bash
clever env set DASHBOARD_USER <USERNAME>
clever env set DASHBOARD_PASS <PASSWORD>
```

#### 6. Deploy your application

```bash
clever deploy
```

#### 7. Open your application in a browser

```bash
clever open
```
The dashboard will be accessible at `<DOMAIN_NAME>/dashboard`.

### Monitoring Your Application

Once deployed, you can monitor your application through:

- **Web Console**: The Clever Cloud console provides logs, metrics, and other tools to help you manage your application.
- **CLI**: Use `clever logs` to view application logs and `clever status` to check the status of your application.

## Additional Resources

- [Parse Dashboard Documentation](https://github.com/parse-community/parse-dashboard)
- [Parse Server Documentation](https://docs.parseplatform.org/)
- [Clever Cloud Node.js Documentation](https://www.clever-cloud.com/developers/doc/applications/nodejs/)
- [Clever Cloud Documentation](https://www.clever-cloud.com/doc/)
