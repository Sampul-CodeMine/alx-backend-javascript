#!/usr/bin/env node

export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true; // eslint-disabled-line no-unused-vars
    const task2 = false; // eslint-disabled-line no-unused-vars
  }

  return [task, task2];
}
