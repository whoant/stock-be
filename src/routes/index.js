const sessionRoute = require('./session.route');

module.exports = app => {
    app.use('/api/v1/session', sessionRoute);
};
