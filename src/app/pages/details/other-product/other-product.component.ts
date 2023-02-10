import { Component, Input } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Product } from 'src/app/shared/models/product';


@Component({
  selector: 'app-other-product',
  templateUrl: './other-product.component.html',
  styleUrls: ['./other-product.component.scss']
})
export class OtherProductComponent {
  @Input() product!:Product;

  constructor(private viewportScroller: ViewportScroller) { }

  onButtonClick() {
      this.viewportScroller.scrollToPosition([0, 0]);
  }
}
