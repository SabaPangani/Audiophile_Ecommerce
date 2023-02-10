import { Injectable } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { MatDialog } from '@angular/material/dialog';
import { FinalDialogComponent } from 'src/app/pages/checkout/final-dialog/final-dialog.component';
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
  openFinalOrderDialog(grandTotal: number) {
    const dialogRef = this.dialog.open(FinalDialogComponent,{
      data: {
        styles: {
          opacity: 1,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
