const http = require('http');
const fs = require('fs').promises;

const fileName = process.argv[2];
async function countStudents(path) {
    try {
	const data = await fs.readFile(path, 'utf-8');
	const students = data.trim().split('\n').filter((line) => line.trim() !== '');
	const lines = students.slice(1);
	const fields = {};
	for (const line of lines) {
	    const seg = line.split(',');
	    const firstname = seg[0];
	    const field = seg[3];
	    if (!fields[field]) {
		fields[field] = [];
	    }
	    fields[field].push(firstname);
	}
	let report = `Number of students: ${lines.length}`;
	for (const field in fields) {
	    if (Object.prototype.hasOwnProperty.call(fields, field)) {
		const list = fields[field].join(', ');
		report += `Number of students in ${field}: ${fields[field].length}. List: ${list}`;
	    }
	    return report;
    } catch (err) {
	throw new Error('Cannot load the database');
    }
}
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
