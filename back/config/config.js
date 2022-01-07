const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  development: {
    username: 'luke',
    password: process.env.DB_PASSWORD,
    database: 'react_nodebird',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  test: {
    username: 'luke',
    password: process.env.DB_PASSWORD,
    database: 'react_nodebird',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    username: 'luke',
    password: process.env.DB_PASSWORD,
    database: 'react_nodebird',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
};
