const fs = require('fs').promises;

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
    console.log(`Number of students: ${lines.length}`);
    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        const list = fields[field].join(', ');
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${list}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
