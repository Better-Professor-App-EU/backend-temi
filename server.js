const express = require('express');
const helmet = require('helmet');
const cors = require('cors');


const studentsRouter = require('./api/students/students-router.js');

const server = express();


server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/students', studentsRouter);

module.exports = server;
