const path = require('path');
const express = require('express');
const compression = require('compression');

const PORT = 5500;

const app = express();
app.use(compression());

app.use(express.static(path.join(__dirname, 'build')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => console.log(`Serving on port ${PORT}`));
