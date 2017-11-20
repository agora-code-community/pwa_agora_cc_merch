import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { AuthService } from './../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

export interface LoginMo {
  title: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends DialogComponent<LoginMo, boolean> implements LoginMo {

  title: string;
  username: string;
  password: string;

  constructor(
    dialogService: DialogService,
    private authService: AuthService,
    private flashMessages: FlashMessagesService,
    private router: Router
  ) {
    super(dialogService);
  }

  /**
   * Logins a user into the system
   * @param user The data from the login form
   */
  loginSubmit(user) {

    this.authService.authenticateUser(user).subscribe(data => {
      if (data.success) {
        // we authenticate the user adn store relevant data
        this.authService.storeUserData(data.token, data.user);
        // flash message and redirect
        this.flashMessages.show('Welcome, you are now logged in as - ' + data.user.username ,
          {cssClass: 'alert-success', timeout: 5000});
          // redirect to page
        this.router.navigate(['/']);
      } else {
        // not successfull
        this.flashMessages.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
      }
    });

    this.result = true;
    this.close();
  }

  confirm() {
    // we set dialog result as true on click on confirm button,
    // then we can get dialog result from caller code
    this.result = true;
    this.close();
  }
}
