import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {AuthService} from '../services/auth.service';
import { LoginComponent } from './../components/login/login.component';
import { DialogService } from 'ng2-bootstrap-modal';

@Injectable()

export class AuthGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router,
        private dialogService: DialogService
    ) {

    }

    canActivate() {
        if (this.authService.loggedIn()) {
           return true;
        } else {
            this.showLogin();  // shows the loggin modal
            return false;
        }
    }

    /**
     * Shows the login modal
     */
    public showLogin() {
        const opts = {
            closeByClickingOutside: true
        };

        const disposable = this.dialogService.addDialog(LoginComponent, {
            title: 'Login'
        }, opts).subscribe((isConfirmed) => {
            // We get dialog result
            if (isConfirmed) {
                console.log('accepted');
            }
        });
    }
}
