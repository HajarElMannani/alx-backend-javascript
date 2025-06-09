const fs = require('fs');
function countStudents(path) {
    try {
	const data = fs.readFileSync(path, 'utf-8');
	const students = data.trim().split('\n')
	const lines = {};
	let num = 0;
	for (let i = 1; i < rows.length; i++) {
	    const student = rows[i];
	    if (student.trim() === '')
		continue;
	    const fields = student.split(',');
	    const firstname = fields[0];
	    const field = fields[3];
	    lines[field].push(firstname);
	    num++;
	}
	console.log(`Number of students: ${num}`);
	for (const field in lines) {
	    const list = lines[field].join(', ');
	    console.log(`Number of students in ${field}: ${lines[field].length}. List: ${list}`);
	}
    } catch (err) {
	throw new Error('Cannot load the database')
    }    
}
module.exports = countStudents;
