#!/usr/bin/env node
export default function getFullResponseFromAPI(success) {
  // if true returns a status code of 200
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
