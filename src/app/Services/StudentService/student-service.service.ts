import { HttpClient, HttpErrorResponse ,HttpParams} from '@angular/common/http';
import { HtmlParser } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';
import { environment } from 'src/assets/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private http: HttpClient) { }

  // makePostRequest(data: any): Observable<any> {
  //   console.log(environment.apiUrl+"AddStudent");
  //   return this.http.post(environment.apiUrl+"AddStudent", data).pipe(
  //     catchError((error: HttpErrorResponse) => {
        
  //       console.log("data: ",data);
  //       console.log(error.status);
  //       if(error.status===200){
  //         return "200";
  //       }
  //       else if(error.status===404)
  //       {
         
  //         return "404";
  //       }
  //       // Handle the error response here
  //       else if (error.status === 400) {
  //         // Handle 400 Bad Request error
  //         console.error('Bad Request:', error.error);
  //       } else if (error.status === 401) {
  //         return "401";
  //         // Handle 401 Unauthorized error
  //         console.error('Unauthorized:', error.error);
  //       } else {
  //         // Handle other error status codes
  //         console.error('Error:', error.error);
  //       }

  //       // Return an observable with the error message or throw the error to propagate it to the next error handler
  //       return throwError(error.error || 'Server error');
  //     })
  //   );
  // }
  postRequest(data: any) {
    //return this.http.post(environment.apiUrl+'AddStudent', data);
    return this.http.post(environment.apiUrl+'AddStudent', data)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if(error.status===200){
          return error.status.toString();
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
  
    return this.http.get<any>(environment.apiUrl+"getStudentByEmail", { params })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if(error.status===200){
            return "200";
          }
          else if(error.status===404)
          {
           
            this.postRequest(data).subscribe(response => {
              console.log(response);
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
  
    return this.http.get(environment.apiUrl+"getAllStudent", { params })
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if(error.status===200){
          return "200";
        }
        else if(error.status===404)
        {
         
          this.postRequest(data).subscribe(response => {
            console.log(response);
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

}
