const express = require('express');

const app = express();
app.use((req, res) => {
  res.send('Hello ALX!');
});
app.listen(1245, () => {
    console.log('listening on port 1245');
});
module.exports = app;
