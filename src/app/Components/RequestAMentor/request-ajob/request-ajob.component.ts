import { Component } from '@angular/core';

@Component({
  selector: 'app-request-ajob',
  templateUrl: './request-ajob.component.html',
  styleUrls: ['./request-ajob.component.scss']
})
export class RequestAJobComponent {
  subArr = new Array();


  dataToSend ={
    class: "",
    instituteName: "",
    location: "",
    experience:"",

    
      subjectName: [
        ""
    ]
  }
  
  getValue(data: any) {

    this.subArr.push(data);
  
  
  }
  delValue(data: any) {
    const index: number = this.subArr.indexOf(data);
    this.subArr.splice(index, 1);
    
  }
  getRequestMentorFormData(data:any){

  }
}
