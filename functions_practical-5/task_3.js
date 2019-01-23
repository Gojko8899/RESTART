// Initialize two arrays. The first one should contain student names, the second one the number of points for each student.
//  Display students' names with their corresponding grade. Use the following ranges:
// 51-60 -> 6,
// 61-70 -> 7,
// 71-80 -> 8,
// 81-90 -> 9,
// 91-100 -> 10.
// Input:
// [ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
// Output:
// Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.

function studentsGrades(arrayOne, arrayTwo) {
  let student;
  let grade;
  let result;

  for (let i = 0; i < arrayOne.length; i++) {
    grade = arrayTwo[i];
    student = arrayOne[i];
    // console.log(result);
    if (grade <= 50) {
      result =
        student +
        " has " +
        grade +
        " points and he failed to complete the test";
    } else if (grade > 50 && grade <= 60) {
      result = student + " has " + grade + " points and passed the test with 6";
    } else if (grade > 60 && grade <= 70) {
      result = student + " has " + grade + " points and passed the test with 7";
    } else if (grade > 70 && grade <= 80) {
      result = student + " has " + grade + " points and passed the test with 8";
    } else if (grade > 80 && grade <= 90) {
      result = student + " has " + grade + " points and passed the test with 9";
    } else {
      result =
        student + " has " + grade + " points and passed the test with 10";
    }
    console.log(result);
  }
  // return result;
}

studentsGrades(
  ["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"],
  [50, 39, 63, 72, 99, 51, 83, 59]
);
