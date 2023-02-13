import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/components/services/services.service';
import {  BreakpointObserver,  BreakpointState} from '@angular/cdk/layout';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  constructor(private modalService:ModalService,public breakpointObserver: BreakpointObserver,){}
  mobileMenu:boolean = false; 
  showNav:boolean = true;
  showBurgerMenu = false;
  openCart(){
    this.modalService.openCartDialog();
  }

  showMobileMenu(){
    this.mobileMenu = !this.mobileMenu;
  }

  ngOnInit(){
    this.breakpointObserver
    .observe(['(min-width: 769px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.showNav = true
        this.showBurgerMenu = false
        this.mobileMenu = false;
      } else {
        this.showNav = false
        this.showBurgerMenu = true
      }
    });
  }

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
