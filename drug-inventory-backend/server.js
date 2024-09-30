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

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) {
        console.log("No token provided");
        return res.status(401).json({ message: "Token not provided" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            console.log("JWT verification error:", err.message);
            return res.status(403).json({ message: "Token is invalid or expired" });
        }

        req.user = user;
        next(); 
    });
};


// app.post('/book-appointment', authenticateToken, async (req, res) => {
//     if (req.user.role !== 'amin') return res.status(403).json({ message: "Access denied" });
//     const { fullName, age, mobileNumber, address, gender, description } = req.body;

//     try {
//         const result = await pool.query(
//             `INSERT INTO appointment_form 
//             (full_name, age, address, gender, description)
//             VALUES ($1, $2, $3, ) RETURNING *`,
//             [fullName, age, mobileNumber, address, gender, description]
//         );
//         res.status(201).json({ message: 'Appont created', appointment: result.rows[0] });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Error creating appointment' });
//     }
// });

app.post('/book-appointment', authenticateToken, async (req, res) => {
    if (req.user.role !== 'user') return res.status(403).json({ message: "Access denied" });
    const { fullName, age, mobileNumber, address, gender, description } = req.body;

    try {
        const result = await pool.query(
            `INSERT INTO appointment_form 
            (full_name, age, mobile_number, address, gender, description)
            VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
            [fullName, age, mobileNumber, address, gender, description]
        );
        res.status(201).json({ message: 'Appointment created', appointment: result.rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating appointment' });
    }
});

app.get('/list-appointment', authenticateToken, async (req, res) => {
    if (req.user.role !== 'admin') return res.status(403).json({ message: "Access denied" });

    try {
        const appointments = await pool.query("SELECT * FROM appointment_form");
        res.json(appointments.rows);
    } catch (err) {
        res.status(500).send("Error retrieving appointments");
    }
});
app.get('/bed', async (req, res) => {

    try {
        const bed = await pool.query("SELECT * FROM bed");
        res.json(bed.rows);
    } catch (err) {
        res.status(500).send("Error retrieving appointments");
    }
});




app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});