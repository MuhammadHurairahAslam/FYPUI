import { Component,OnInit  } from '@angular/core';
import { OpenModelService } from 'src/app/Services/OpenModelService/open-model.service';
import { AuthencationService } from 'src/app/Services/AuthencationService/authencation.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Commons } from 'src/assets/Commons';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isInvalidCredentials = false;
  email:string='';
  pass:string='';
  modelTitle:any;
  common:any;
  constructor(private openModel:OpenModelService,private auth:AuthencationService,
   ){
    this.modelTitle=" Student"
  }
  ngOnInit(): void {
this.common=Commons;
    // Code to run when the component is initialized
  }
  OpenRegisterationForm(){
    this.openModel.openRegisterationnModal()
  }
  closeModel(){
    this.openModel.closeModel();
  }
  changeTitle(type:any){
    if(type==='m'){
      this.modelTitle=" Mentor"
    }
    else{
      this.modelTitle=" Student"
    }

  }


  dataToSend={
    email:"",
    password:"",
    type:""
  };
  getStudentFormData(data:any){
    this.common.showSpinner=true;

    console.log("CALLING API-----------------------------------");

    console.log(data.email);
    this.dataToSend.email=data.email;
    this.dataToSend.password=data.pass;
    this.dataToSend.type="student";
    this.auth.login(this.dataToSend).subscribe(
      (response: HttpResponse<any>) => {
        if(response.status===200)
        { 
          this.common.showSpinner=false;
         
        }
       else if(response.status===404)
       { 
        this.common.showSpinner=false;
        this.isInvalidCredentials=true;
       
       }       
      },
      (error: HttpErrorResponse) => {     
        this.common.showSpinner=false;
        this.isInvalidCredentials=true;
        console.error('Error:', error);
      }
    );
  }
 getMentorFormData(data:any){
  this.common.showSpinner=true;
  this.dataToSend.email=data.email;
  this.dataToSend.password=data.pass;
  this.dataToSend.type="mentor";
  
  this.auth.login(this.dataToSend).subscribe(
    (response: HttpResponse<any>) => {
      if(response.status===200)
      { 
        this.common.showSpinner=false;
       
      }
     else if(response.status===404)
     { 
      this.common.showSpinner=false;
      this.isInvalidCredentials=true;
     
     }       
    },
    (error: HttpErrorResponse) => {     
      this.common.showSpinner=false;
      this.isInvalidCredentials=true;
      console.error('Error:', error);
    }
  );
  }
}
