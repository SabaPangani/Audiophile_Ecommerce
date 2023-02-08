import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/components/services/services.service';
@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {
  
  @Input() product:any;
  @Input() productQte:number = 0;

  constructor(private modalService:ModalService){}

  ngOnInit(): void {
    this.productQte =  0;
  }

  addQte(){
    this.productQte += 1;
  }
  decQte(){
    if (this.productQte !=0){
      this.productQte -= 1;
    }
  }

  addToCart(product: any) {

    if (this.productQte > 0) {
      let newCart = []
      const oldCart = JSON.parse(localStorage.getItem("products") || "[]");
      const toStore = {
        id: product.id,
        price: product.price,
        name: product.name,
        qte: this.productQte,
        image: product.image.mobile
      }

      if (!oldCart.length) {
        newCart = [toStore];
        localStorage.setItem('products', JSON.stringify(newCart));
      }
      else {
        oldCart.forEach((pct: any) => {
          if (pct.id == product.id) {
            pct.qte += this.productQte;
            newCart = [...oldCart];
            localStorage.setItem('products', JSON.stringify(newCart));
          }
          else {
            newCart = [...oldCart, toStore];
            localStorage.setItem('products', JSON.stringify(newCart));
          }
        });
      }
      this.modalService.openCartDialog();
      this.productQte = 0;
    }
  }
}
