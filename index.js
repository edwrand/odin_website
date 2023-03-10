// page for postgres database

// imoporting the pg model
const { Pool } = require('pg')

// creating a pool instance
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'your_database',
    password: 'poop',
    database: 'odin',
    port: 5432 // default Postgres port
})

pool.connect() // connecting to the pool

// querying the pool
pool.query('SELECT NOW()', (err, res) => {
    if (!err) {
        console.log(res.rows)
    } else {
        console.log(err.message)
    }
    console.log(err, res)
    pool.end() // end the connection pool
})