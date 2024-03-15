"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStudent = exports.StudentClass = exports.printTeacher = void 0;
function printTeacher(firstName, lastName) {
    return "".concat(firstName[0], ". ").concat(lastName);
}
exports.printTeacher = printTeacher;
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this._firstName;
    };
    return StudentClass;
}());
exports.StudentClass = StudentClass;
function createStudent(studobj, firstName, lastName) {
    return new studobj(firstName, lastName);
}
exports.createStudent = createStudent;
