import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  products = [
    {
      'imgPath': "https://audiophile-challenge.netlify.app/assets/shared/desktop/image-category-thumbnail-headphones.png",
      'name': 'headphones',
    },
    {
      'imgPath': "https://audiophile-challenge.netlify.app/assets/shared/desktop/image-category-thumbnail-speakers.png",
      'name': 'speakers',

    },
    {
      'imgPath': "https://audiophile-challenge.netlify.app/assets/shared/desktop/image-category-thumbnail-earphones.png",
      'name': 'earphones'
    },
  ]

}