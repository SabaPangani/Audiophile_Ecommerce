import { Component, Input, Output } from '@angular/core';
import { Product } from '../../../shared/models/product';
@Component({
  selector: 'app-final-dialog',
  templateUrl: './final-dialog.component.html',
  styleUrls: ['./final-dialog.component.scss']
})
export class FinalDialogComponent {

  cart:Product[] = [];
  grandTotal:number = 0;

  ngOnInit(){
    this.cart = JSON.parse(localStorage.getItem("products") || "[]");
    console.log(this.cart);

    for (const item of this.cart) {
      this.grandTotal += item.price * item.qte;
    }
  }
}
