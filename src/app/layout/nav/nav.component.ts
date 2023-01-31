import { Component } from '@angular/core';
import { ModalService } from 'src/app/shared/components/services/services.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  constructor(private modalService:ModalService){}

  openCart(){
    this.modalService.openCartDialog();
  }
}
