const express = require('express');
const routes =require('./routes/indexRoutes');
const app = express();
app.use(express.json());
app.use('/', routes);
// app.use('/uploads', express.static('upload'));
module.exports = app;
