#!/usr/bin/env node
export default function createEmployeesObject(deparmentName, employees) {
    return {
        [`${deparmentName}`]: employees,
    };
}
