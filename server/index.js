const db = require('./db');
const apiRouter = require('./router/api')(db);
const morgan = require('morgan'); 
const bodyParser = require('body-parser'); 
const express = require('express');
const PORT = process.env.PORT || 1337;
const path = require('path');
const app = express();

app.use("*",(req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,PATCH');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
  next();
});

// app.use(express.static(`${__dirname}/public`));
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api/', [
  bodyParser.json(), 
  bodyParser.urlencoded({ extended: true }), 
  apiRouter
]);

app.get('/', function(req, res, next) {
  res.sendFile(__dirname + '../public/index.html');
});

const server = app.listen(PORT, () => {
  console.log(`Server up and listening on port ${PORT}`);
});

module.exports = app;