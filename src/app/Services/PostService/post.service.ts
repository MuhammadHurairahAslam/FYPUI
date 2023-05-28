import { Injectable } from '@angular/core';
import { HttpClient } from '@microsoft/signalr';
import { environment } from 'src/assets/environment';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) {

   }
   
postData( data: any) {
  return this.http.post(environment.apiUrl+'Add', data);
}
  
}
