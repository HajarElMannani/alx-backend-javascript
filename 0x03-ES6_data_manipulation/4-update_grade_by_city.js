export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const studentCity = studentList.filter((student) => student.location === city);

  return studentCity.map((student) => {
    const matchedGrade = newGrades.find((grade) => grade.studentId === student.id);

    return {
      ...student,
      grade: matchedGrade ? matchedGrade.grade : 'N/A',
    };
  });
}
