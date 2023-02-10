import { animate } from '@angular/animations';
import { JsonPipe } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart:Product[] = [];
  total:number = 0;


  ngOnInit(){
    this.cart = JSON.parse(localStorage.getItem("products") || "[]");
    this.calculateTotal();
    console.log(this.cart)
  }

  addQte(product:any){
    const index = this.cart.findIndex(prod => prod.id === product.id);
    if (index === -1) return;

    this.cart[index].qte += 1;

    localStorage.setItem("products", JSON.stringify(this.cart));
    this.total += product.price;
  }

  decQte(product:any){
    const index = this.cart.findIndex(prod => prod.id === product.id);
    if (index === -1) return;

    this.cart[index].qte -= 1;

    if (this.cart[index].qte <= 0) {
      this.cart.splice(index, 1);
    }
    localStorage.setItem("products", JSON.stringify(this.cart));
    this.total -= product.price;
  }

  calculateTotal(){
    this.cart.forEach((product:any) => {
      this.total += product.price * product.qte;
    })
  }

  removeAll(){
    this.cart = [];
    this.total = 0;
    localStorage.setItem("products", JSON.stringify(this.cart));
  }
}
