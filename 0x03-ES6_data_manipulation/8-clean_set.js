#!/usr/bin/env node

/**
 * This is a function to check if the value in an array is also in a set dataset
 * @param {Set} set - a set dataset
 * @param {String} startstring - a string
 * @returns String
 */

export default function cleanSet(set, startstring) {
  if (typeof set !== 'object' || typeof startstring !== 'string' || startstring.length === 0) {
    return '';
  }
  const strSet = [];
  [...set].forEach((el) => {
    if (el && el.indexOf(startstring) === 0) {
      strSet.push(el.replace(startstring, ''));
    }
  });
  return strSet.join('-');
}
