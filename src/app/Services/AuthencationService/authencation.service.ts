import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/assets/environment';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthencationService {
  private isLoggedIn = false;

  constructor(private http: HttpClient) { }

  public login(data:any): Observable<any> {
    return  this.http.post(environment.apiUrl+"Login", data).pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('type', response.type);
      })
    );
  }

  public logout() {
    localStorage.removeItem('token');
  }

public  isAuthenticated() {
    return this.isLoggedIn;
  }
  public getAccountType(): boolean {
    const type = localStorage.getItem('type');
    return !!type;
  }
}