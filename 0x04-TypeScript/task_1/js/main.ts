interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) {
  return `${firstName[0]}. ${lastName}`;
};

interface StudentClassInterface {
workOnHomework(): string;
displayName(): string
}

interface constructorClass {
new (firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass implements StudentClassInterface{
  constructor(firstName, lastName) {
   this.firstName = firstName;
   this.lastName = lastName;
}
  function workOnHomework() {
  return 'Currently working';
  }

  function displayName() {
    return this.firstName;
}
}