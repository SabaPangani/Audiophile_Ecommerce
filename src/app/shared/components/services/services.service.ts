import { Injectable } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { MatDialog } from '@angular/material/dialog';
@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private dialog: MatDialog) { }

  openCartDialog() {
    const dialogRef = this.dialog.open(CartComponent, {
      width:"450px",
      position:{
        top: '30px',
        right: '30px',
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
