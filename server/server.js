require('dotenv').config();

const express = require('express');
const { Sequelize } = require('sequelize');
const config = require('./config/config.json');
const sequelize = new Sequelize(config.development);
const app = express();

// sync tables
sequelize.sync()
  .then(() => console.log('Database & tables created!'));

app.use(express.json());

app.use('/', (req, res, next) => {
  res.status(200).json({status: true, message: 'Server is running.'});
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});