import { CartService } from './../../services/cart.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { CartMoComponent } from '../cart-mo/cart-mo.component';
import { LoginComponent } from './../login/login.component';
import { DialogService } from 'ng2-bootstrap-modal';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    // variables
    cartItems: number;
    username: string; // to be used in the navbar

  constructor(
      private dialogService: DialogService,
      public authService: AuthService,
      private router: Router,
      private flashMessages: FlashMessagesService,
      private cartService: CartService
    ) { }

  ngOnInit() {
  }

  showConfirm() {
      const disposable = this.dialogService.addDialog(CartMoComponent, {
          title: 'Confirm title',
          message: 'Confirm message'
      }).subscribe((isConfirmed) => {
              // We get dialog result
              if (isConfirmed) {
                alert('accepted');
              } else {
                alert('declined');
              }
          });
      // We can close dialog calling disposable.unsubscribe();
      // If dialog was not closed manually close it by timeout
      setTimeout(() => {
          disposable.unsubscribe();
      }, 10000);
    }

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

    /**
     * Gets a user form local storage
     */
    getUsername() {
        const user = JSON.parse(localStorage.getItem('user'));
        this.username = user.username;
        return this.username;
    }

    getCartCount() {
        this.cartService.showCart().subscribe(data => {
            this.cartItems = data.itemCount;
        });
        return this.cartItems;
    }

    /**
     * Logs the user out of the system
     */
    onLogout() {
        this.authService.logout();
        // flash logout msg
        this.flashMessages.show('You have succefully logged out, later!', 
            {cssClass: 'alert-success', timeout: 3000});
        // redirects to home
        this.router.navigate(['/']);
        return false;
    }
}
