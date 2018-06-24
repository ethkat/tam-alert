const path = require('path');
const express = require('express');
const compression = require('compression');

const app = express();
app.use(compression());

app.use(express.static(path.join(__dirname, 'build')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(5500);
