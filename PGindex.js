// page for postgres database

// imoporting the pg model
// pool could also be called client but I followed a random
// tutroial and it used pool so I'm using pool
const { client } = require('pg')

// creating a pool instance
const client = new client({
    user: 'postgres',
    host: 'localhost',
    database: 'OdinData',
    password: 'Jzqooi11',
    port: 5432 // default Postgres port
})

client.connect() // connecting to the pool

// querying the pool
client.query('SELECT NOW()', (err, res) => {
    if (!err) {
        console.log(res.rows)
    } else {
        console.log('connection error', err.message)
    }
    console.log(err, res)
    pool.end() // end the connection pool
})