import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MentorServiceService } from 'src/app/Services/MentorService/mentor-service.service';
import { LocationService } from '../../../Services/Location/location.service';
import { HttpErrorResponse, HttpClient, HttpEventType } from '@angular/common/http';
import { Commons } from 'src/assets/Commons';
import { UploadFileServiceService } from 'src/app/Services/UploadFileService/upload-file-service.service';
@Component({
  selector: 'app-mentor-registeration',
  templateUrl: './mentor-registeration.component.html',
  styleUrls: ['./mentor-registeration.component.scss']
})

export class MentorRegisterationComponent {
  google: any;
  subArr = new Array();
  Commons: any;
  data: any;
  location: any;
  @Output() public onUploadFinished = new EventEmitter();

  constructor(private mentorService: MentorServiceService, private locationService: LocationService,private uploadService:UploadFileServiceService, private http: HttpClient) {
    this.Commons = Commons;
    this.getUserLocation();
  }

  ngOnInit(): void {

  }

  uploadFile = (files:any,type:any) => {
    this.uploadService.uploadFile(files,type)
     }



  getValue(data: any) {
    this.subArr.push(data);
  }
  delValue(data: any) {
    const index: number = this.subArr.indexOf(data);
    this.subArr.splice(index, 1);
  }


  dataToSend = {
    name: "",
    email: "",
    mobile: "",
    cnic: "",
    password: "",
    gender: "",
    image: "",
    video: "",
    organization: "",
    role: "",
    experienceFrom: "",
    experienceTo: "",
    instituteName: "",
    levelOfEducation: "",
    qualificationFrom: "",
    qualificationTo: "",
    isActive: false,
    addressDto: {
      lat: "",
      long: "",
      addres: "",
      city: "",
      postalCode: "",
      country: "",
      area: "",
      provinence: ""
    },
    subjectName: [
      ""
    ]
  }
  selectedGender: any;
  getMentorFormData(data: any) {

    this.dataToSend.name = data.name;
    this.dataToSend.email = data.email;
    this.dataToSend.cnic = data.cnic.toString();
    this.dataToSend.password = data.password;
    this.dataToSend.gender = this.selectedGender;
    this.dataToSend.mobile = data.mobileNumber
    this.dataToSend.image = this.Commons.Images;
    this.dataToSend.video = this.Commons.Video;
    this.dataToSend.organization = data.OrganizationName;
    this.dataToSend.role = data.role;
    this.dataToSend.experienceFrom = data.EFrom;
    this.dataToSend.experienceTo = data.ETo;
    this.dataToSend.instituteName = data.institute;
    this.dataToSend.levelOfEducation = data.levelOfEducation;
    this.dataToSend.qualificationFrom = data.QFrom;
    this.dataToSend.qualificationTo = data.QTo;
    this.dataToSend.addressDto.lat = this.location.latitude.toString();
    this.dataToSend.addressDto.long = this.location.longitude.toString();
    this.dataToSend.addressDto.addres = this.location.address;
    this.dataToSend.addressDto.city = this.location.city;
    this.dataToSend.addressDto.country = this.location.country;
    this.dataToSend.addressDto.provinence = this.location.state;
    this.dataToSend.addressDto.postalCode = this.location.postalCode;
    this.dataToSend.addressDto.area = this.location.area;
    this.dataToSend.subjectName = this.subArr;

    this.mentorService.checkUserExistOrNot(this.dataToSend).subscribe(
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

  getUserLocation() {
    this.locationService.getUserLocation()
      .then((location) => {
        this.location = location;

      })
      .catch((error) => {
        console.error(error);
      });
  }


}
