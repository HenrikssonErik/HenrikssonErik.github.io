import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import * as sha512 from 'js-sha512';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('Log-in fields running');
  }

  /**
   * Send the log-in information to backend
   * @param val user email and password
   */
  logIn(val) {
    if (this.checkEmail(val.email) && val.password != '') {
      var hash = sha512.sha512(val.email + val.password + val.email);
      console.log(hash);

      //send to backend
    } else
      document.getElementById('error').innerHTML = 'Fel inloggningsuppgifter';
  }

  /**
   *User info to create account
   * @param val user name, email, password
   */
  createAccount(val) {}

  /**Check email formating */

  /**
   * Check password for correct input
   * ONLY USE ON CREATE ACCOUNT
   * @param psswrd password
   */
  checkPsswrd(psswrd: String): boolean {
    return false;
  }

  checkEmail(email: string): boolean {
    var emailReg = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (emailReg.test(email)) {
      return true;
    }
    //
    return false;
  }

  /**
   * Changes from log-in form to create account form
   */
  createAccountPage() {
    document.getElementById('loginpage').classList.add('hideForm');
    document.getElementById('registerpage').classList.remove('hideForm');
  }

  /**
   * Changes from create account form to log-in form
   */
  loginPage() {
    document.getElementById('loginpage').classList.remove('hideForm');
    document.getElementById('registerpage').classList.add('hideForm');
  }
}
