import { Injectable ,EventEmitter,Output} from '@angular/core';
import { environment } from 'src/assets/environment';
import {HttpErrorResponse,HttpClient, HttpEventType} from'@angular/common/http';
import { Commons } from 'src/assets/Commons';
import { Common } from 'googleapis';
@Injectable({
  providedIn: 'root'
})
export class UploadFileServiceService {
  @Output() public onUploadFinished = new EventEmitter();
  constructor(private http:HttpClient) { }
  uploadFile = (files:any,type:any) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    var formData = new FormData();
    formData.append(type, fileToUpload, fileToUpload.name);
    console.log("Type: ",type);
    console.log("Type: ",formData);
   this.http.post(environment.apiUrl+'UploadFile', formData, {reportProgress: true, observe: 'events'})
      .subscribe({
        next: (event:any) => {
        if (event.type === HttpEventType.UploadProgress){
          if(type=='Videos'){
            Commons.VProgress = Math.round(100 * event.loaded / event.total);
          }
          else{
            Commons.IProgress=Math.round(100 * event.loaded / event.total);
          }          
        }        
        else if (event.type === HttpEventType.Response) {
          if(type=='Videos'){
            Commons.VMessage = 'Video Upload success.';     
            console.log(event.body.dbPath);  
            Commons.VideoSrc =environment.hostAddress+event.body.dbPath;
            Commons.Video=event.body.dbPath;
          }
          else{
            Commons.IMessage = 'Upload success.';         
            Commons.ImageSrc = environment.hostAddress+event.body.dbPath;
            Commons.Images=event.body.dbPath;
            ;
          }
          this.onUploadFinished.emit(event.body);  
        
        }
      },
      error: (err: HttpErrorResponse) => console.log(err)
    });
  
  }
}
