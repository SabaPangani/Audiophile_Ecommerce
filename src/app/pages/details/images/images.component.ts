import { Component, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { productService } from '../../category/service/product.service';


@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent {
  @Input() product!:Product;
}
