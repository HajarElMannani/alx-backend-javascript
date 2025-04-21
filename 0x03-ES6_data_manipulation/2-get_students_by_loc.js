export default function getStudentsByLocation(array, city) {
  const studentsInCity = array.filter((obj) => obj.location === city);
  return studentsInCity;
}
