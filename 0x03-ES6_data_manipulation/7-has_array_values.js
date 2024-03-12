#!/usr/bin/env node

/**
 * This is a function to check if the value in an array is also in a set dataset
 * @param {Set} set - a set dataset
 * @param {Array} arr - an array dataset
 * @returns Boolean True or false
 */

export default function hasValuesFromArray(set, arr) {
  return arr.every((value) => set.has(value));
}
