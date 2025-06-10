import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const fileName = await readDatabase(process.argv[2]);
      let out = 'This is the list of our students\n';
      const fields = Object.keys(fileName)
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
      for (const field of fields) {
        const list = fileName[field].join(', ');
        out += `Number of students in ${field}: ${fileName[field].length}. List: ${list}\n`;
      }
      return response.status(200).send(out);
    } catch (err) {
      return response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      return response.status(500).send('Major parameter must be CS or SWE');
    }
    try {
      const fileName = await readDatabase(process.argv[2]);
      const nameList = fileName[major] || [];
      return response.status(200).send(`List: ${nameList.join(', ')}`);
    } catch (err) {
      return response.status(500).send('Cannot load the database');
    }
  }
}
export default StudentsController;
