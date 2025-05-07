const express = require('express');
const serverless = require('serverless-http');
const app = express();

app.get('/', (req, res) => {
  res.send('¡Hola desde Express en Netlify!');
});

module.exports.handler = serverless(app);
