const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const pool = new Pool({
    user: 'your_postgresql_user',
    host: 'your_postgresql_host',
    database: 'your_postgresql_database',
    password: 'your_postgresql_password',
    port: your_postgresql_port,
});

app.post('/submitForm', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const query = 'INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3)';
        await pool.query(query, [name, email, message]);
        res.status(200).send('Form submitted successfully!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error submitting the form. Please try again.');
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));