const express = require('express');
const sequelize = require('./config/database');
const { User, Book } = require('./models');
const db = require('./models');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());


app.use(express.json());


// Test Route
app.get('/', (req, res) => {
  res.send('Book Management API is Running');
});

// Auth Routes
app.use('/auth', authRoutes);

// Book Routes
app.use('/books', bookRoutes);

// Sync Models
sequelize
  .sync({ alter: true }) // Use `alter: true` during development
  .then(() => {
    console.log('Database synchronized...');
    app.listen(process.env.PORT, () => {      
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error('Unable to synchronize database:', err);
  });
