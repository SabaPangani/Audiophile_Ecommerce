import { Component, Input } from '@angular/core';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-other-product',
  templateUrl: './other-product.component.html',
  styleUrls: ['./other-product.component.scss']
})
export class OtherProductComponent {
  @Input() product:any;

  constructor(private viewportScroller: ViewportScroller) { }

  onButtonClick() {
      this.viewportScroller.scrollToPosition([0, 0]);
  }
}
