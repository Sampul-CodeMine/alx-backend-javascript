#!/usr/bin/env node

/**
 * This is a function that retrives student ids from an array of students objects
 * @returns an array of students id if parameter is an array of objects else empty array
 */
export default function getListStudents(arr) {
  if (!(arr instanceof Array)) {
    return [];
  }
  return arr.map((student) => student.id);
}
