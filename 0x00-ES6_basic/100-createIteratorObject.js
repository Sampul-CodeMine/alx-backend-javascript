#!/usr/bin/env node
export default function createIteratorObject(report) {
  const result = [];
  for (const itr of Object.values(report.allEmployees)) {
    result.push(...itr);
  }
  return result;
}
