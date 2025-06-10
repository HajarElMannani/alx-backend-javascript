import { promises as fs } from 'fs';

async function readDatabase(path) {
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
    return fields;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
export default readDatabase;
