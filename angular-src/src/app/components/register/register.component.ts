import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService } from './../../services/validate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // form variables
  name: string;
  email: string;
  username: string;
  password: string;
  phone: string;
  address: string;

  constructor(
    private validateService: ValidateService,
    private flashMessages: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  /**
   * Handles registration form submission
   */
  onRegisterSubmit(user) {
    // Required filed validation
    if (!this.validateService.validateRegister(user)) {
      this.flashMessages.show('Please fill in all the fields', { cssClass: 'alert-warning', timeout: 3000 });
      return false;
    }

    // email validation
    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessages.show('Please enter a valid email', { cssClass: 'alert-info', timeout: 3000 });
      return false;
    }

    // registers the user
    this.authService.registerUser(user).subscribe(data => {
      // if registration happens
      if (data.success) {
        this.flashMessages.show('Your are now registered and can log in!',
          { cssClass: 'alert-success', timeout: 3000 });

          // redirect to the login page
          this.router.navigate(['/']);
      } else {
        // if not registered
        this.flashMessages.show('Oops! Something went worng, try again',
          { cssClass: 'alert-danger', timeout: 3000 });

          // direct back to register page
          this.router.navigate(['/register']);
      }
    });
  }

}
