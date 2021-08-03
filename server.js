const express = require('express');
const cors = require('cors');

const reminders = require('./routes/reminders');

const server = express();

server.use(cors());
server.use(express.json());

server.use('/api/recipes/', reminders);

server.get('/', (req, res) =>
  res.status(200).json("Welcome to the Reminder App Server!")
);

module.exports = server;