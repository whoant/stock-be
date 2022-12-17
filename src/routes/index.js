const authRoute = require('./auth.route');
const ordersRoute = require('./orders.route');
const sessionsRoute = require('./sessions.route');
const assetsRoute = require('./assets.route');
const kLineChartsRoute = require('./kLineCharts.route');
const reportsRoute = require('./reports.route');
const stocksRoute = require('./stocks.route');
const userRoute = require('./users.route');

module.exports = app => {
    app.use('/api/v1/auth', authRoute);
    app.use('/api/v1/orders', ordersRoute);
    app.use('/api/v1/sessions', sessionsRoute);
    app.use('/api/v1/assets', assetsRoute);
    app.use('/api/v1/kLineChart', kLineChartsRoute);
    app.use('/api/v1/reports', reportsRoute);
    app.use('/api/v1/stocks', stocksRoute);
    app.use('/api/v1/users', userRoute);
};
