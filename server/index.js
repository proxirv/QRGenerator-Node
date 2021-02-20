const express = require('express');
const restApi = express();
const server = require('http').createServer(restApi);
const rutas = require('./src/routes/Routes.js');

restApi.use(express.json());
restApi.use(express.static(__dirname+'/public'));

server.listen(3040,()=>console.log('Listening server in port 3040'));

restApi.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
  
restApi.use('/api',rutas);