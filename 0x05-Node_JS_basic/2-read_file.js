const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const students = data.trim().split('\n');
    const lines = {};
    let num = 0;
    for (let i = 1; i < students.length; i += 1) {
      const student = students[i];
      if (student.trim() !== '') {
        const fields = student.split(',');
        const firstname = fields[0];
        const field = fields[3];
        if (!lines[field]) {
          lines[field] = [];
        }
        lines[field].push(firstname);
        num += 1;
      }
    }
    console.log(`Number of students: ${num}`);
    for (const field in lines) {
      if (Object.prototype.hasOwnProperty.call(lines, field)) {
        const list = lines[field].join(', ');
        console.log(`Number of students in ${field}: ${lines[field].length}. List: ${list}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
