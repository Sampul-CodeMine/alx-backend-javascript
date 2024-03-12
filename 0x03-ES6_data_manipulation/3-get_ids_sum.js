#!/usr/bin/env node

/**
 * This is a function that returns the sum of the ids of all the students
 * @param Array takes an array of objects of students
 * @return Number sum of all the students id
 */

export default function getStudentIdsSum(arr) {
  if (!(arr instanceof Array)) {
    return 0;
  }
  return arr.reduce((acc, student) => acc + student.id, 0);
}
