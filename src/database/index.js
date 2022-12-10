const { Pool } = require('pg')

const pool = new Pool({
    connectionString: 'postgres://postgres:Vovanhoangtuan1@localhost:5433/stock',
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});

module.exports = {
    query: (text, params) => pool.query(text, params),
}
