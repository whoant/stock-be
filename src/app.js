require('dotenv').config();
const express = require('express');
const db = require('./database');
const loaders = require('./loaders');

const PORT = process.env.PORT || 3000;

const app = express();

loaders(app);

app.listen(PORT, () => {
    console.log(`Connect server on ${PORT}`);
});
