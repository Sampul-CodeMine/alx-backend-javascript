#!/usr/bin/env node

export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  const MAX_ENDPOINT_CALLS = 5;

  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  weakMap.set(endpoint, weakMap.get(endpoint) + 1);

  if (weakMap.get(endpoint) >= MAX_ENDPOINT_CALLS) {
    throw new Error('Endpoint load is high');
  }
}
