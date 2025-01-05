const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./app/config/db');
const authRoutes = require('./app/routes/authRoutes');
const cookieParser = require('cookie-parser');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.use('/api/auth', authRoutes);
app.get('/', (req, res) => {
    res.send('hello world!')
  })

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
