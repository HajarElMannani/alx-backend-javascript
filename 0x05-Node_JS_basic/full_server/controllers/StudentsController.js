import { readDatabase } from '../utils.js';

class StudentsController {
    static getAllStudents(request, response) => {
	try {
	    const fileName = await readDatabase(process.argv[2]);
	    let resp = 'This is the list of our students\n';
	    const fields = Object.keys(fileName).sort((a, b) =>
						      a.toLowerCase().localeCompare(b.toLowerCase())
						     );
	    for (const field of fields) {
		const list = fields[field].join(', ');
		resp += `Number of students in ${field}: ${fileName[field].length}. List: ${list}\n`;
	    }
	    response.status(200).send(resp);
	} catch {
	    response.status(500).send('Cannot load the database');
	}
    }
    static async getAllStudentsByMajor(request, response) {
	const major = request.params.major;
	if (major !== 'CS' && major !== 'SWE') {
	    return response.status(500).send(' Major parameter must be CS or SWE');
	}
	try {
	    const fileName = await readDatabase(process.argv[2]);
	    const nameList = fileName[major] || [];
	    response.status(200).send(`List: ${nameList.join(', ')}`);
	} catch {
	    response.status(500).send('Cannot load the database');
	}}}
export default StudentController;
