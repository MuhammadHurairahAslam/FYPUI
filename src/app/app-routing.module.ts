import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BenefitsOfOurServiceComponent } from './Components/MainPage/benefits-of-our-service/benefits-of-our-service.component';
import { FeaturedMentorsComponent } from './Components/MainPage/featured-mentors/featured-mentors.component';
import { FooterOfPageComponent } from './Components/MainPage/footer-of-page/footer-of-page.component';
import { HeaderOfPageComponent } from './Components/MainPage/header-of-page/header-of-page.component';
import { HowItWorksComponent } from './Components/MainPage/how-it-works/how-it-works.component';
import { MainSliderComponent } from './Components/MainPage/main-slider/main-slider.component';
import { PopularSubjectsComponent } from './Components/MainPage/popular-subjects/popular-subjects.component';
import { MainPageComponent } from './Components/MainPage/main-page/main-page.component';
import { StudentRegisterationComponent } from './Components/Registeration/student-registeration/student-registeration.component';
import { MentorRegisterationComponent } from './Components/Registeration/mentor-registeration/mentor-registeration.component';
import { SearchATutorComponent } from './Components/SearchATutor/search-a-tutor/search-a-tutor.component';
import { RequestAMentorComponent } from './Components/RequestAMentor/request-a-mentor/request-a-mentor.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { MentorServiceService } from './Services/MentorService/mentor-service.service';
import { LocationService } from './Services/Location/location.service';
import { MentorProfileOpenComponent } from './Components/SearchATutor/mentor-profile-open/mentor-profile-open.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterationFormComponent } from './Components/registeration-form/registeration-form.component';
import { AuthGuard } from './Services/AuthGuardService/auth-guard.service';
const routes: Routes = [

  {path:'',component:MainPageComponent},
  { path: 'header', component: HeaderOfPageComponent },
  { path: 'footer', component: FooterOfPageComponent },
  { path: 'main-slider', component: MainSliderComponent },
  { path: 'benefits', component: BenefitsOfOurServiceComponent },
  { path: 'featured', component: FeaturedMentorsComponent },
  { path: 'how-it-work', component: HowItWorksComponent },
  { path: 'popular-subjects', component: PopularSubjectsComponent },
  {path:'register-as-student', component:StudentRegisterationComponent},
  {path:'register-as-mentor', component:MentorRegisterationComponent},
  {path:'Search-Mentor', component:SearchATutorComponent,canActivate: [AuthGuard]},
  {path:'Request-Mentor', component:RequestAMentorComponent},
  {path:'Contact', component:ContactUsComponent,canActivate: [AuthGuard]},
  {path:'mentorProfileOpen', component:MentorProfileOpenComponent},
    {path:'Login', component:LoginComponent},
    {path:'Registeration', component:RegisterationFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[MentorServiceService,LocationService]


})
export class AppRoutingModule { }
