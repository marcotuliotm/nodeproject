const path = require('path');
module.exports = {
  config: path.resolve('config/database.js'),
  'migrations-path': path.resolve('db/migrate'),
  'seeders-path': path.resolve('db/seeds'),
  'models-path': path.resolve('src/models')
};
const express = require('express');
const app = express();
// static files
app.use(express.static('public'));
// start server
app.listen(process.env.PORT || 5000);