import { Component } from '@angular/core';
import { StudentServiceService } from 'src/app/Services/StudentService/student-service.service';
import { LocationService } from '../../../Services/Location/location.service';
import {HttpErrorResponse} from'@angular/common/http';
import { Commons } from 'src/assets/Commons';
import { UploadFileServiceService } from 'src/app/Services/UploadFileService/upload-file-service.service';
@Component({
  selector: 'app-student-registeration',
  templateUrl: './student-registeration.component.html',
  styleUrls: ['./student-registeration.component.scss']
})
export class StudentRegisterationComponent {
  subArr = new Array();
  url = "../../../../assets/Images/user.png";
  data:any;
  location: any;
  google: any;
  Commons:any;
  constructor(private studentService:StudentServiceService,private locationService:LocationService,private uploadService:UploadFileServiceService) { 
    this.Commons=Commons;
    this.getUserLocation();
   }
 
  dataToSend ={
    name: "",
    email: "",
    mobile: "",

    password: "",
    gender: "",
    image: "",
    instituteName: "",
    class: "",
    
    isActive: false,
      addressDto: {
        lat: "",
        long: "",
        addres: "",
        city: "",
        
        country: "",
        area: "",
        provinence: ""
    },
      subjectName: [
        ""
    ]
  }
  uploadFile(image:any,type:any){
    this.uploadService.uploadFile(image,type);
  }

  selectedGender: any; 
  getStudentFormData(data: any) {

    this.dataToSend.name=data.Name;
    this.dataToSend.email=data.email;
   
    this.dataToSend.password=data.pass;
    this.dataToSend.gender=this.selectedGender;
    this.dataToSend.mobile=data.mobile.toString();
    
    this.dataToSend.image=Commons.Images;
    this.dataToSend.class=data.class;
    this.dataToSend.instituteName=data.instituteName;
    
    this.dataToSend.addressDto.lat=this.location.latitude.toString();
    this.dataToSend.addressDto.long=this.location.longitude.toString();
    this.dataToSend.addressDto.addres=this.location.address;
    this.dataToSend.addressDto.city=this.location.city;
    this.dataToSend.addressDto.country=this.location.country;
    this.dataToSend.addressDto.provinence=this.location.state;
    this.dataToSend.addressDto.area=this.location.area;

    this.dataToSend.subjectName=this.subArr;

    console.log(this.dataToSend);
    this.studentService.checkUserExistOrNot(this.dataToSend).subscribe(
      (response) => {
       var res;
      
        if(response==="2")
        {
          
          alert("User Already Exist");
        }
        else if(response==="404"){

          
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



  getUserLocation() {
    this.locationService.getUserLocation()
      .then((location) => {
        this.location = location;
    
      })
      .catch((error) => {
        console.error(error);
      });
  }


getValue(data: any) {

  this.subArr.push(data);


}
delValue(data: any) {
  const index: number = this.subArr.indexOf(data);
  this.subArr.splice(index, 1);
  
}




 

}
