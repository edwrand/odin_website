// page for postgres database

// imoporting the pg model
// pool could also be called client but I followed a random
// tutroial and it used pool so I'm using pool
const { Pool } = require('pg')

// creating a pool instance
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'OdinData',
    password: 'Jzqooi11',
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