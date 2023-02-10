import { Component,Input } from '@angular/core';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-products-showcase',
  templateUrl: './products-showcase.component.html',
  styleUrls: ['./products-showcase.component.scss']
})
export class ProductsShowcaseComponent{
  @Input() products: Product[] = [];
}
