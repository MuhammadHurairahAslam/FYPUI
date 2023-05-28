import { Component ,OnInit } from '@angular/core';
import { Commons } from 'src/assets/Commons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'My Mentore';
  common:any;
  ngOnInit(): void {
this.common=Commons;
    // Code to run when the component is initialized
  }
}
