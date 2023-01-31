import { animate } from '@angular/animations';
import { JsonPipe } from '@angular/common';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart:any[] = [];
  total:number = 0;


  ngOnInit(){
    this.cart = JSON.parse(localStorage.getItem("products") || "[]");
    this.calculateTotal();
    console.log(this.cart)
  }

  calculateTotal(){
    this.cart.forEach((product:any) => {
      this.total = product.price * product.qte;
    })
  }

  removeAll(){
    this.cart = [];
    this.total = 0;
    localStorage.setItem("products", JSON.stringify(this.cart));
  }
}
