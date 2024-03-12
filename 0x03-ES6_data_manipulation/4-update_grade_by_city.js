#!/usr/bin/env node

/**
 * This is a function that returns the sum of the ids of all the students
 * @param {Array} studarr an array of objects of students
 * @param {String} city the city of the student
 * @param {Array} newGrade an array of objects of new grades
 * @returns An array of students for a specific city with their new grades.
 */

export default function updateStudentGradeByCity(studarr, city, newGrade) {
  if (!(studarr instanceof Array)) {
    return [];
  }
  return studarr.filter((student) => student.location === city).map((student) => ({
    id: student.id,
    firstName: student.firstName,
    location: student.location,
    grade: (newGrade.filter((grade) => grade.studentId === student.id).pop() || { grade: 'N/A' }).grade,
  }));
}
