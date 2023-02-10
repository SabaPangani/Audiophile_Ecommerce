import { Component, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { productService } from '../../category/service/product.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {
  @Input() product!:Product;
}
