const authRoute = require('./auth.route');
const ordersRoute = require('./orders.route');
const sessionsRoute = require('./sessions.route');
const assetsRoute = require('./assets.route');

module.exports = app => {
    app.use('/api/v1/auth', authRoute);
    app.use('/api/v1/orders', ordersRoute);
    app.use('/api/v1/sessions', sessionsRoute);
    app.use('/api/v1/assets', assetsRoute);
};
