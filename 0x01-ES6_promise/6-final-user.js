#!/usr/bin/env node
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((resolve) => (
      resolve.map((obj) => ({
        status: obj.status,
        value: obj.status === 'fulfilled' ? obj.value : String(obj.reason),
      }))
    ));
}
