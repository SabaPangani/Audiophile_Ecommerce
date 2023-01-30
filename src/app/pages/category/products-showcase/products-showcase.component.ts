import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-products-showcase',
  templateUrl: './products-showcase.component.html',
  styleUrls: ['./products-showcase.component.scss']
})
export class ProductsShowcaseComponent{
  @Input() products:any
}
