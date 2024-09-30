const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: 5432
});

pool.connect((err, client, release) => {
    if (err) {
        console.error('Failed to connect to the database:', err.stack);
    } else {
        console.log('Successfully connected to the database');
    }
    release(); //release client so that we can use that client -----
});

module.exports = pool;