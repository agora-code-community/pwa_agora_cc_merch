import { Component, OnInit } from '@angular/core';
import { CartMoComponent } from '../cart-mo/cart-mo.component';
import { DialogService } from "ng2-bootstrap-modal";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private dialogService:DialogService) { }

  ngOnInit() {
  }

  showConfirm() {
    let disposable = this.dialogService.addDialog(CartMoComponent, {
        title:'Confirm title', 
        message:'Confirm message'})
        .subscribe((isConfirmed)=>{
            //We get dialog result
            if(isConfirmed) {
                alert('accepted');
            }
            else {
                alert('declined');
            }
        });
    //We can close dialog calling disposable.unsubscribe();
    //If dialog was not closed manually close it by timeout
    setTimeout(()=>{
        disposable.unsubscribe();
    },10000);
}
}
