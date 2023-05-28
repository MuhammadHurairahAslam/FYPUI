import { Component, OnInit } from '@angular/core';
import { OpenModelService } from 'src/app/Services/OpenModelService/open-model.service';
import { AuthencationService } from 'src/app/Services/AuthencationService/authencation.service';
import { Commons } from 'src/assets/Commons';
@Component({
  selector: 'app-header-of-page',
  templateUrl: './header-of-page.component.html',
  styleUrls: ['./header-of-page.component.scss']
})
export class HeaderOfPageComponent implements OnInit{
  
Commons:any;
  
  constructor(private open:OpenModelService,public auth:AuthencationService){ 
    this.Commons=Commons;      
  }
  ngOnInit(): void {}

  openModel(type:any){
    if(type==='l')
    {
      this.open.openLoginModal();
    }
    else if(type==='r'){
      this.open.openRegisterationnModal();
    }
    else if(type==='s')
    {
  
    }
  }
  logout(){
    this.auth.logout();
  }
  getImageFromLocalStorage(){
    return localStorage.getItem('Image')?localStorage.getItem('Image'):"../../../../assets/Images/maleprofile.jpg";
  }
 
}
