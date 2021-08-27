'use strict';

const express = require('express');

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World - NodeJS is running on FlashDrive!');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);