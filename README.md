# Run parse-dashboard on Clever Cloud

How to run the BaaS [parse-dashboard](https://github.com/parse-community/parse-dashboard) on [Clever CLoud](https://clever-cloud.com/).

Assuming you have [clever-tools](https://www.clever-cloud.com/doc/getting-started/cli/) installed and configured:

```
git clone https://github.com/parse-community/parse-dashboard
cd parse-dashboard
clever create --type node myParseDashboard
clever service link-app myParseServer
clever env set DASHBOARD_USER user
clever env set DASHBOARD_PASS pass
clever domain add yourdomain.cleverapps.io/dashboard
clever deploy
```



