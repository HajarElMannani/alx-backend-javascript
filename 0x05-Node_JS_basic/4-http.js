const express = require('express');

const app = module.exports = express();
app.use((req, res) => {
  res.send('Hello ALX!');
});
app.listen(1245);
