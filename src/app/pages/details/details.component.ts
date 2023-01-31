import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productService } from '../category/service/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  constructor(private route:ActivatedRoute, private productsService:productService){}

  prodName:string = '';
  product:any = [];

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        this.prodName = params.get('slug') ?? '';
        this.product = this.productsService.getProductBySlug(this.prodName);
        console.log(this.prodName)
    });
  }
}
