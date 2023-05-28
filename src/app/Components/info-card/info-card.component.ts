import { Component } from '@angular/core';
import { Commons } from 'src/assets/Commons';
@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent {
  common:any;
  constructor(){this.common=Commons;}
  closeCard(){
    this.common.showCard=false;
    }
    openCard(){
      this.common.showCard=true;
      }


  }

