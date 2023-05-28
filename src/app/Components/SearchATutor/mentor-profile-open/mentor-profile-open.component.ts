import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/assets/environment';
import { AuthencationService } from 'src/app/Services/AuthencationService/authencation.service';
@Component({
  selector: 'app-mentor-profile-open',
  templateUrl: './mentor-profile-open.component.html',
  styleUrls: ['./mentor-profile-open.component.scss']
})
export class MentorProfileOpenComponent implements OnInit {

  constructor(private route: ActivatedRoute,protected auth:AuthencationService){}

  url:any;
  data:any;
  maleprofileUrl="../../../../assets/Images/maleprofile.jpg";
  femaleprofile="../../../../assets/Images/femaleprofile.jpg";
  ngOnInit() {
    this.url=environment.hostAddress;
    // subscribe to the route params and get the data from the state property
    this.route.paramMap.subscribe(params => {
      this.data = window.history.state.data;
      console.log(this.data); // { name: 'John', age: 30 }
    });
  }
}
