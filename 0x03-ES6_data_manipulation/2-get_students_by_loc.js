#!/usr/bin/env node

/**
 * This is a function that retrives student in a given location
 * @returns an array of students in a given city location
 */

export default function getStudentsByLocation(arr, city) {
  if (!(arr instanceof Array)) {
    return [];
  }
  return arr.filter((student) => student.location === city);
}
