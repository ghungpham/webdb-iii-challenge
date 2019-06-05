const express = require('express');
const helmet = require('helmet');


const server = express();
const cohortsRoutes = require('./api/cohortsRoutes.js');

server.use(express.json());
server.use(helmet());

server.get('/', (req,res) => {
    res.send('<h1> API running</h1>')
})
;

server.use('/api/cohorts', cohortsRoutes)


module.exports = server;