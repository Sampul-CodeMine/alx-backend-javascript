#!/usr/bin/env node

export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw TypeError('student must be a String');
    }

    if (typeof name !== 'string') {
      throw TypeError('student must be a String');
    }

    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof code !== 'string') {
      throw TypeError('student must be a String');
    }
    this._code = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw TypeError('student must be a String');
    }
    this._name = value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
