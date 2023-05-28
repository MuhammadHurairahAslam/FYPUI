import { Component } from '@angular/core';
import { PostService } from 'src/app/Services/PostService/post.service';
import { AuthencationService } from 'src/app/Services/AuthencationService/authencation.service';

@Component({
  selector: 'app-request-a-mentor',
  templateUrl: './request-a-mentor.component.html',
  styleUrls: ['./request-a-mentor.component.scss']
})
export class RequestAMentorComponent {
  subArr = new Array();


  dataToSend ={
    PostCreaterId:"",
    AccountType:"",
    LevelOfEducation:"",
    Institute:"",
    Experience:"",
    Location:"",
    Description:"",
    Subjects:[""]
  }
  constructor(private postService:PostService,private auth:AuthencationService){}
  getValue(data: any) {

    this.subArr.push(data);
  
  
  }
  delValue(data: any) {
    const index: number = this.subArr.indexOf(data);
    this.subArr.splice(index, 1);
    
  }
  async getRequestMentorFormData(data:any){
    this.dataToSend.LevelOfEducation=data.class;
    this.dataToSend.Institute=data.class;
    this.dataToSend.Location=data.location;
    this.dataToSend.Description=data.description;
    this.dataToSend.Subjects=this.subArr;
    this.dataToSend.AccountType=this.auth.getAccountType();
   try{
    console.log("Calling API...............................");
    var res=await this.postService.postData(data);
console.log("Response of API: ",res);
   }
   catch{
console.log("Error .................................................");
   }

console.log("Get Post data from request mentor",data);
  }
}
