const express = require('express');
const sequelize = require('./config/database');
const errorHandler = require('./middlewares/errorHandler');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
require('dotenv').config();

const app = express();
app.use(express.json()); // Parse incoming JSON requests

// Test Route
app.get('/', (req, res) => {
  res.send('Book Management API is Running');
});

// Auth Routes
app.use('/auth', authRoutes);

// Book Routes
app.use('/books', bookRoutes);

// Global Error Handler Middleware
app.use(errorHandler);

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
