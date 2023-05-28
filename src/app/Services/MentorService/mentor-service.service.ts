import { HttpClient, HttpErrorResponse ,HttpParams} from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';
import { environment } from 'src/assets/environment';
import { Common } from 'googleapis';
@Injectable()
export class MentorServiceService {

  commons:any;
  constructor(private http: HttpClient) {this.commons=Common; }

  PostRequest(data: any): Observable<any> {
    return this.http.post(environment.apiUrl+"AddMentor", data);
  }



  checkUserExistOrNot(data:any): Observable<any> {
    
    
    // Pass the email as a query parameter
    const params = { email: data.email };
  
    return this.http.get<any>(environment.apiUrl+"GetByMentorEmail", { params });
  }


  getAll(data:any): Observable<any> {
    
    console.log("Calling Mentor API.............................");
    // Pass the email as a query parameter
    const params = { subject: data.subjectName,provinence:data.provinence,city:data.city,area:data.area};
  console.log(environment.apiUrl+"GetAllMentors");
    return this.http.get(environment.apiUrl+"GetAllMentors", { params });
  }


  
}

