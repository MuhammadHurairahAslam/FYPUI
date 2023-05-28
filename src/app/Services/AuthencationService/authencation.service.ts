import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/assets/environment';
import { Router } from '@angular/router';
import { Commons } from 'src/assets/Commons';
import { OpenModelService } from '../OpenModelService/open-model.service';
import { SignalrService } from '../SignlR/signal-r.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Injectable({
  providedIn: 'root'
})
export class AuthencationService {

user:any;
  constructor(private http: HttpClient, 
    private router: Router,
    private open:OpenModelService,private signalr:SignalrService,private spinnerService:NgxSpinnerService) {

     }

  public login(data: any): Observable<any> {

    return this.http.post(environment.apiUrl + "Login", data).pipe(
      tap((response: any) => {
        this.user=response;
        console.log("response: ",response);
        localStorage.setItem('token', response.token);
        localStorage.setItem('type', response.type);
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('Image',environment.hostAddress+response.image);
        localStorage.setItem('Id',response.id);
        this.signalr.buildHubConnection();
        Commons.IsVisible=true;
        Commons.Images=localStorage.getItem('Image')?environment.hostAddress+localStorage.getItem('Image'):"../../../../assets/Images/menprofile.png";
        this.open.closeModel();
   
        this.router.navigate(['']);

      })
    );
  }

  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('type');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('Image');
    localStorage.removeItem('Id');
    localStorage.removeItem('SignalRId');
    Commons.IsVisible=false;
    Commons.Images="../../../../assets/Images/menprofile.png";
    
    this.router.navigate(['']);

  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('isLoggedIn');
  }
  public getAccountType(): any {
    return localStorage.getItem('type')?.toString();
  }
  public Response(){
    return this.user;
  }
  public GetUserId() {
    return localStorage.getItem('Id')?.toString();
  }
  public ImageReturn(){
    return localStorage.getItem('Image');
  }
}