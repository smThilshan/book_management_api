const mysql = require('mysql2/promise');
// require('dotenv').config();

// async function connectToDatabase() {
//   try {
//     const connection = await mysql.createConnection({
//       host: process.env.DB_HOST,
//       user: process.env.DB_USER,
//       password: process.env.DB_PASSWORD,
//       database: process.env.DB_NAME,
//     });

//     console.log('✅ Connected to MySQL database');
//     return connection;
//   } catch (err) {
//     console.error('Database Connection Error:', err.message);
//     throw err;
//   }
// }

// module.exports = connectToDatabase;


require('dotenv').config();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASS,
     {
    host: process.env.DB_HOST,
    dialect: 'mysql'
    },
);

module.exports = sequelize;
