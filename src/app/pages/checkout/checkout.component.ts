import { TmplAstRecursiveVisitor } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {

  checkoutForm:FormGroup = new FormGroup({});
  summaryProducts:any[] = [];
  total:number = 0;
  grandTotal:number = 0;

  ngOnInit(){
    this.createForm();
    this.summaryProducts = JSON.parse(localStorage.getItem("products") || "[]");
    this.calculateTotal();
    console.log(this.summaryProducts);
  }

  createForm(){
    this.checkoutForm = new FormGroup({

      billing: new FormGroup({
        'name': new FormControl(null,Validators.required),
        'email': new FormControl(null,[Validators.required,Validators.email]),
        'phone': new FormControl(null,[Validators.required,Validators.pattern('[- +()0-9]+')])
      }),
  
      shipping: new FormGroup({
        'address': new FormControl(null,Validators.required),
        'zipCode': new FormControl(null,Validators.required),
        'city': new FormControl(null,Validators.required),
        'country': new FormControl(null,Validators.required)
      }),
  
      payment: new FormGroup({
        'delivery': new FormControl(null,Validators.required),
        'eMoney': new FormControl(null,Validators.required),
        'eNumber': new FormControl(null,Validators.required),
        'ePin': new FormControl(null,Validators.required)
      }),
  
    });
  }

  onFormSubmit(){
    console.log(this.checkoutForm.value)
  }
  calculateTotal(){
    this.summaryProducts.forEach((product:any) => {
      this.total += product.price * product.qte;
      this.grandTotal += product.price * product.qte + 50;
    })
  }
}
