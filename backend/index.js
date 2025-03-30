const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db_connect');
const cookieParser = require('cookie-parser');
dotenv.config();

const app = express();
app.use(cookieParser());
app.use(express.json());
// app.use(cors());
app.use(cors({
    origin: "http://localhost:5173",  // ✅ Set the frontend URL (do not use '*')
    credentials: true  // ✅ Allow credentials (cookies, authorization headers)
}));

connectDB();

app.use('/api/user',require('./routes/userRoutes'));
app.use('/api/cab',require('./routes/cabRoutes'));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});