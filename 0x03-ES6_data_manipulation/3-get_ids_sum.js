export default function getStudentIdsSum(studentList) {
  const sum = studentList.reduce((acc, student) => acc + student.id, 0);
  return sum;
}
