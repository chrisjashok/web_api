    // If using dotenv
    require('dotenv').config();

    const { Client } = require('pg');

    const dbConfig = {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
    };

    const client = new Client(dbConfig);

    client.connect()
        .then(() => {
            console.log('Connected to PostgreSQL database');
            // You can now execute queries
            // Example:
            // client.query('SELECT NOW()', (err, res) => {
            //     if (err) {
            //         console.error('Error executing query', err);
            //     } else {
            //         console.log('Current time:', res.rows[0].now);
            //     }
            //     client.end(); // Close connection after query
            // });
        })
        .catch(err => {
            console.error('Error connecting to PostgreSQL database', err);
        });

    // To export the client for use in other modules
    module.exports = client;