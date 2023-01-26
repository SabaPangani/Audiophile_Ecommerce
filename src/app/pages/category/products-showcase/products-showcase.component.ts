import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productService } from '../service/product.service';

@Component({
  selector: 'app-products-showcase',
  templateUrl: './products-showcase.component.html',
  styleUrls: ['./products-showcase.component.scss']
})
export class ProductsShowcaseComponent implements OnInit{
  constructor(private route:ActivatedRoute, private productsService:productService){}

  categoryName:any;
  products:any = [];

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        this.categoryName = params.get('category');
        this.products = this.productsService.getProductByCategory(this.categoryName);
    });
  }
}
