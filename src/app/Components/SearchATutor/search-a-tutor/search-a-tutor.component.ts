import { Component, OnInit } from '@angular/core';
import { MentorServiceService } from 'src/app/Services/MentorService/mentor-service.service';
import { StudentServiceService } from 'src/app/Services/StudentService/student-service.service';
import{HttpErrorResponse} from'@angular/common/http';
import { Router } from '@angular/router';
import {environment} from'../../../../assets/environment';
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

constructor(private mentorService:MentorServiceService,private studentService:StudentServiceService,private router: Router){
 
}
ngOnInit(): void {
  this.url=environment.hostAddress;
  this.getAllMentors(this.data);
}


getAllMentors(data:any){

this.data.subjectName=data.subject;
this.data.area=data.area;
this.data.city=data.city;
this.data.provinence=data.Provinence;
  this.studentService.getAll(this.data).subscribe((response)=>{
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
navigateToMentorProfile(data:any){
  this.router.navigate(['/mentorProfileOpen'], { state: { data } });
}

}
