import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cat-hero',
  templateUrl: './cat-hero.component.html',
  styleUrls: ['./cat-hero.component.scss']
})
export class CatHeroComponent {
  constructor(private route:ActivatedRoute){}

  @Input() headerName:string = '';

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        this.headerName = params.get('category') ?? '';
    });
  }
}
