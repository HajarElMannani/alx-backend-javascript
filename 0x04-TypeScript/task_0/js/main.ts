interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Jane',
  lastName: 'Austin',
  age: 25,
  location: 'London, England',
}

const student2:	Student	= {
  firstName: 'Rim',
  lastName: 'Miro',
  age: 20,
  location: 'Rabat, Morocco',
}

const studentsList: Student[] = [student1, student2];

const table = document.createElement('Table');
const tableRow = document.createElement('tr');
const headerName = document.createElement('th');
const headerLocation = document.createElement('th');
headerName.textContent = 'First Name';
headerLocation.textContent = 'Location';

tableRow.appendChild(headerName);
tableRow.appendChild(headerLocation);
table.appendChild(tableRow);

studentsList.forEach((student) => {
const row = document.createElement('tr');
const rowName = document.createElement('td');
rowName.textContent = student.firstName;
const rowLocation = document.createElement('td');
rowLocation.textContent = student.location;

row.appendChild(rowName);
row.appendChild(rowLocation);
table.appendChild(row);
});

document.body.appendChild(table);

