const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db_connect');
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
connectDB();

app.use('/api/user',require('./routes/userRoutes'));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});