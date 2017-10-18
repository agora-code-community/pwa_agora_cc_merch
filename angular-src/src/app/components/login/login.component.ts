import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service'
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(
    private validateService: ValidateService, 
    private flashMessages: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  )
  {

  }

  ngOnInit() {
  }

  onLoginSubmit(){
    const user = {
      username: this.username,
      password: this.password
    }

    if(!this.validateService.validateLogin(user))
    {
      this.flashMessages.show('Please Fill in All Fields',{cssClass: 'alert-danger', timeout: 5000});
      return false;
    }

    this.authService.authenticateUser(user).subscribe(data => {
      if(data.success)
      {
        this.authService.storeUserData(data.token, data.user);
        this.flashMessages.show('Login Successful', {cssClass: 'alert-success', timeout: 4000});
        this.router.navigate(['dashboard']);
      }else{
        this.flashMessages.show('Login Unsuccessful', {cssClass: 'alert-danger', timeout: 4000});
        this.router.navigate(['login']);
      }
    });
  }

}
