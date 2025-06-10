const http = require('http');
const countStudents = require('./3-read_file_async');
const fileName = process.argv[2]
const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello ALX!');
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(fileName)
    .then((report) => {
      res.end(report);
    });
    .catch ((err) => {
      res.end('Cannot load database');
    });
  }
  res.end();
});
app.listen(1245);
module.exports = app;
