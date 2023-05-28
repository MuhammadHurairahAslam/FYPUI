import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog';

import { SignalrService  } from './Services/SignlR/signal-r.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderOfPageComponent } from './Components/MainPage/header-of-page/header-of-page.component';
import { MainSliderComponent } from './Components/MainPage/main-slider/main-slider.component';
import { HowItWorksComponent } from './Components/MainPage/how-it-works/how-it-works.component';
import { FeaturedMentorsComponent } from './Components/MainPage/featured-mentors/featured-mentors.component';
import { PopularSubjectsComponent } from './Components/MainPage/popular-subjects/popular-subjects.component';
import { BenefitsOfOurServiceComponent } from './Components/MainPage/benefits-of-our-service/benefits-of-our-service.component';
import { FooterOfPageComponent } from './Components/MainPage/footer-of-page/footer-of-page.component';
import { MainPageComponent } from './Components/MainPage/main-page/main-page.component';
import { StudentRegisterationComponent } from './Components/Registeration/student-registeration/student-registeration.component';
import { MentorRegisterationComponent } from './Components/Registeration/mentor-registeration/mentor-registeration.component';
import { MapViewComponent } from './Components/MainPage/map-view/map-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchATutorComponent } from './Components/SearchATutor/search-a-tutor/search-a-tutor.component';
import { RequestAMentorComponent } from './Components/RequestAMentor/request-a-mentor/request-a-mentor.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MentorProfileOpenComponent } from './Components/SearchATutor/mentor-profile-open/mentor-profile-open.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterationFormComponent } from './Components/registeration-form/registeration-form.component';
import { JwtInterceptor } from './Services/JWTInterceptor/jwt-interceptor.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './Components/chat/chat.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SpinnerComponent } from './Components/spinner/spinner.component';
import { RequestAJobComponent } from './Components/RequestAMentor/request-ajob/request-ajob.component';
import { InfoCardComponent } from './Components/info-card/info-card.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderOfPageComponent,
    MainSliderComponent,
    HowItWorksComponent,
    FeaturedMentorsComponent,
    PopularSubjectsComponent,
    BenefitsOfOurServiceComponent,
    FooterOfPageComponent,
    MainPageComponent,
    StudentRegisterationComponent,
    MentorRegisterationComponent,
    MapViewComponent,
    SearchATutorComponent,
    RequestAMentorComponent,
    ContactUsComponent,
    MentorProfileOpenComponent,
    RegisterationFormComponent,
    LoginComponent,
    ChatComponent ,SpinnerComponent, RequestAJobComponent, InfoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule
    ,MatDialogModule, NgxSpinnerModule

  ],
  providers: [ SignalrService,
    
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
