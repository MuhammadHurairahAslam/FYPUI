import { HttpClient, HttpErrorResponse ,HttpParams} from '@angular/common/http';
import { HtmlParser } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';
import { environment } from 'src/assets/environment';

@Injectable()
export class MentorServiceService {

  
  constructor(private http: HttpClient) { }

  makePostRequest(data: any): Observable<any> {
    console.log(environment.apiUrl+"AddMentor");
    return this.http.post(environment.apiUrl+"AddMentor", data).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error.status);
        if(error.status===200){
          return "200";
        }
        else if(error.status===404)
        {
         
          return "404";
        }
        // Handle the error response here
        else if (error.status === 400) {
          // Handle 400 Bad Request error
          console.error('Bad Request:', error.error);
        } else if (error.status === 401) {
          return "401";
          // Handle 401 Unauthorized error
          console.error('Unauthorized:', error.error);
        } else {
          // Handle other error status codes
          console.error('Error:', error.error);
        }

        // Return an observable with the error message or throw the error to propagate it to the next error handler
        return throwError(error.error || 'Server error');
      })
    );
  }



  checkUserExistOrNot(data:any): Observable<any> {
    
    
    // Pass the email as a query parameter
    const params = { email: data.email };
  
    return this.http.get<any>(environment.apiUrl+"GetByMentorEmail", { params })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if(error.status===200){
            return "200";
          }
          else if(error.status===404)
          {
           
            this.makePostRequest(data).subscribe((response)=>{
              if(response==="2")
              {
                alert("User Create");
              }
  
            },
            (error:HttpErrorResponse)=>{
              console.log(error.error);
            });
            return "404";
          }
          // Handle the error response here
          else if (error.status === 400) {
            // Handle 400 Bad Request error
            console.error('Bad Request:', error.error);
          } else if (error.status === 401) {
            return "401";
            // Handle 401 Unauthorized error
            console.error('Unauthorized:', error.error);
          } else {
            // Handle other error status codes
            console.error('Error:', error.error);
          }
  
          // Return an observable with the error message or throw the error to propagate it to the next error handler
          return throwError(error.error || 'Server error');
        })
      );
  }


  getAll(data:any): Observable<any> {
    
    // Pass the email as a query parameter
    const params = { subject: data.subjectName,provinence:data.provinence,city:data.city,area:data.area};
  
    return this.http.get(environment.apiUrl+"GetAllMentors", { params });
  }


  
}

