#!/usr/bin/env node
export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
  for (const i of array) {
    arr.push(`${appendString}${i}`);
  }

  return arr;
}
