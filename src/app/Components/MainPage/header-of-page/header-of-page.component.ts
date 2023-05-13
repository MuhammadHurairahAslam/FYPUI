import { Component } from '@angular/core';
import { AuthencationService } from 'src/app/Services/AuthencationService/authencation.service';
import { HttpErrorResponse, HttpClient, HttpEventType } from '@angular/common/http';
@Component({
  selector: 'app-header-of-page',
  templateUrl: './header-of-page.component.html',
  styleUrls: ['./header-of-page.component.scss']
})
export class HeaderOfPageComponent {
  constructor(private auth:AuthencationService){}
  dataToSend={
    email:"",
    password:"",
    type:""
  };
  getStudentFormData(data:any){
    this.dataToSend.email=data.email;
    this.dataToSend.password=data.pass;
    this.dataToSend.type="student";
    this.auth.login(this.dataToSend).subscribe(
      (response) => {
        var res;

        if (response === "2") {

          alert("User Already Exist");
        }
        else if (response === "404") {


        }
        // Handle successful response
        console.log('Response:', res);
      },
      (error: HttpErrorResponse) => {
        // Handle error response
        console.error('Error:', error);
      }
    );
  }
 getMentorFormData(data:any){
  this.dataToSend.email=data.email;
  this.dataToSend.password=data.pass;
  this.dataToSend.type="mentor";
  this.auth.login(this.dataToSend).subscribe(
    (response) => {
      var res;

      if (response === "2") {

        alert("User Already Exist");
      }
      else if (response === "404") {


      }
      // Handle successful response
      console.log('Response:', res);
    },
    (error: HttpErrorResponse) => {
      // Handle error response
      console.error('Error:', error);
    }
  );
  }

  
}
