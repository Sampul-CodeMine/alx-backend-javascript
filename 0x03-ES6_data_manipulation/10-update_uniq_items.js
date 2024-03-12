#!/usr/bin/env node

/**
 * This is a function to changes the quantity of a specified item to 100
 * @param {Map} map - map of a grocert name and quantity
 * @returns Nothing
 */

export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  map.forEach((valu, key) => {
    if (valu === 1) {
      map.set(key, 100);
    }
  });
}
