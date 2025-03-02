const express = require('express');
const app = express();
require('dotenv').config();
const pool = require('./config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true, 
  }));

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.post('/register', async (req, res) => {
    const { username, password, role } = req.body;
    try {
        const hashPass = await bcrypt.hash(password, 10);
        const newUser = await pool.query(
            "INSERT INTO users (username, password, role) VALUES ($1, $2, $3)",
            [username, hashPass, role]
        );
    } catch (err) {
        console.error(err);
        res.status(500).send("Error creating user");
    }
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
        if (user.rows.length === 0) return res.status(400).json({ message: "User not found" });

        const validPassword = await bcrypt.compare(password, user.rows[0].password);
        if (!validPassword) return res.status(400).json({ message: "Invalid password" });

        const token = jwt.sign({ id: user.rows[0].id, role: user.rows[0].role }, process.env.JWT_SECRET);
        res.json({ token });
    } catch (err) {
        res.status(500).send("Error logging in");
    }
});






app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});