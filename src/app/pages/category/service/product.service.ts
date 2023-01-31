import { Injectable } from '@angular/core';
import { products } from 'src/app/shared/data/products';
@Injectable({
  providedIn: 'root'
})
export class productService {

  constructor() { }

  getProductById(id:number){
    return products
  }

  getProductBySlug(slug:string){
    return products.find(product => product.slug == slug);
  }

  getProductByCategory(cat:string){
    return products.filter(product => product.category == cat);
  }
}
