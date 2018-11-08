const express = require('express');

const hostname = '127.0.0.1';
const port = process.env.PORT;

const app = express();

app.get('/', (req, res) => {
  res.send('Express is working.');
});

app.listen(port);
