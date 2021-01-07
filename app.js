const express = require('express');
const path = require('path');
const router = require('./routes/index.js');

const app = express();
const PORT = 3000;

app.use('/', express.static(path.join(__dirname, '.', 'public')));

app.use('/', router);

app.listen(PORT, () => {

});

app.use('*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});
