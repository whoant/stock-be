const express = require('express');
const errorHandler = require('../middleware/errorHandler.middleware');
const routes = require('../routes');

module.exports = app => {
    app.use(express.json());
    routes(app);
    app.use(errorHandler);
};
