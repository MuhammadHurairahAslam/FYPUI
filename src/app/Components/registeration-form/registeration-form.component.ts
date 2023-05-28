import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { OpenModelService } from 'src/app/Services/OpenModelService/open-model.service';
@Component({
  selector: 'app-registeration-form',
  templateUrl: './registeration-form.component.html',
  styleUrls: ['./registeration-form.component.scss']
})
export class RegisterationFormComponent implements OnInit{
constructor(private open:OpenModelService,private router: Router){}
  ngOnInit(): void {
    
  }
closeModel(data:any){
  if(data==="student")
  {
    this.open.closeModel();
    this.router.navigate(['/register-as-student']);

  }
  else if(data==="mentor")
  {
    this.open.closeModel();
    this.router.navigate(['/register-as-mentor']);

  }
  else{
    this.open.closeModel();
  }

}
}
