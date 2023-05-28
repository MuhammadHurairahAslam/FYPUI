import { Component, OnInit } from '@angular/core';
import { MentorServiceService } from 'src/app/Services/MentorService/mentor-service.service';
import { StudentServiceService } from 'src/app/Services/StudentService/student-service.service';
import{HttpErrorResponse} from'@angular/common/http';
import { Router } from '@angular/router';
import {environment} from'../../../../assets/environment';
import { AuthencationService } from 'src/app/Services/AuthencationService/authencation.service';
@Component({
  selector: 'app-search-a-tutor',
  templateUrl: './search-a-tutor.component.html',
  styleUrls: ['./search-a-tutor.component.scss']
})
export class SearchATutorComponent implements OnInit{
  url:any;
  data={
    subjectName:"",
    provinence:"",
    city:"",
    area:""
    };
    responseObj:any;
type:any;
constructor(private mentorService:MentorServiceService,
  private studentService:StudentServiceService,private router: Router,private auth:AuthencationService){
 
}
ngOnInit(): void {
  this.type=this.auth.getAccountType();
  this.url=environment.hostAddress;
console.log("type: ",this.type);
this.getAll(this.data,this.type);
}


getAll(data:any,type:any){

this.data.subjectName=data.subject;
this.data.area=data.area;
this.data.city=data.city;
this.data.provinence=data.Provinence;
(type=="student"?this.mentorService.getAll(this.data):
  this.studentService.getAll(this.data)).subscribe((response)=>{
    console.log("Calling API...................");
    console.log("Type: ",type);
  if(response!=null)
  {
    console.log(response);
    this.responseObj=response;
  }

  },
  (error:HttpErrorResponse)=>{
    console.log(error.error);
  });

}
navigateToProfile(data:any){
  this.router.navigate(['/mentorProfileOpen'], { state: { data } });
}
navigateToChat(data:any){
  this.router.navigate(['/chat'], { state: { data } });
}
backToList(data:any,type:any){
 data.resetForm();
this.getAll(data,type);
}
}
