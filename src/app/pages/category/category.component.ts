import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productService } from './service/product.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  constructor(private route:ActivatedRoute, private productsService:productService){}

  categoryName:string = '';
  @Input() headerName:string = '';
  products:any = [];

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {   
      this.categoryName = params.get('category') ?? '';
      this.headerName = this.categoryName;
      this.products = this.productsService.getProductByCategory(this.categoryName);
    });
  }
}
