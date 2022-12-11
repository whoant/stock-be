require('dotenv').config();
const { Pool } = require('pg')

const pool = new Pool({
    connectionString: process.env.DB_URI,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});

module.exports = {
    query: (text, params) => pool.query(text, params),
}
