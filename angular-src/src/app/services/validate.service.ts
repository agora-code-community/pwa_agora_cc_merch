import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user) {
    if (user.name === undefined || user.email === undefined || user.username === undefined || user.password === undefined) {
      return false;
    } else {
      return true;
    }
  }

  validateEmail(user) {
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

    return re.test(user.email);
  }

  validateLogin(user) {
    if (user.username === undefined || user.password === undefined) {
      return false;
    } else {
      return true;
    }
  }

}
