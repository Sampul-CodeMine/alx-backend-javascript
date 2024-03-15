export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  yearsOfExperience?: number;
  location: string;
  [index:string]: any;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

export interface printTeacherFunc {
  (firstName: string, lastName: string): string;
}

export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

export interface StudentClassInt {
  workOnHomework(): string;
  displayName(): string;
}

export interface studentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInt;
}

export class StudentClass implements StudentClassInt {
  private _firstName: string;
  private _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework(): string {
    return `Currently working`;
  }

  displayName(): string {
    return this._firstName;
  }

}

export function createStudent(studobj: studentClassConstructor, firstName: string, lastName: string): StudentClassInt {
  return new studobj(firstName, lastName);
}
