import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { Observable } from 'rxjs';
import { environment } from 'src/assets/environment';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {
  hubConnection:any;
  // hubUrl: any;
  // connection: any;
  // token: any;
  // messages:any;
  // hubMessage: BehaviorSubject<string>;
  constructor() {
    // this.hubUrl = 'https://localhost:7267/chat';
    // this.hubMessage = new BehaviorSubject<string>("");
  }

  buildHubConnection():void{
    
    const token=localStorage.getItem('token');
    if(token!=null)
    {
      console.log("Starting SignalR Initilization...............................");
      this.hubConnection =  new signalR.HubConnectionBuilder()
                .withUrl(environment.hostAddress+'chat',
                   {
                     accessTokenFactory: () => token
                   })
                 .withAutomaticReconnect()
                 .build();
      console.log("Initilization successfully..............................");
      
      
      
      
    //   new signalR.HubConnectionBuilder()
    // .withUrl(environment.hostAddress+'/chat', {
    
    //   accessTokenFactory: () => token  // Set the JWT token as the access token
    // })
    // .configureLogging(signalR.LogLevel.Information)
    // .withHubProtocol(new signalR.JsonHubProtocol())
    // .build();

    }
  }
  startConnection(): Observable<void> {
    return new Observable<void>((observer) => {
      this.hubConnection.start({withCredentials:false})
        .then(() => {
          console.log("Starting connection with SignalR.....................................");
          localStorage.setItem('SignalRId', this.hubConnection.connectionId);
          observer.next();
          observer.complete();
        })
        .catch((error:any) => observer.error(error));
    });
  }

  sendMessage(reciver: string, message: string): Observable<void> {
    return new Observable<void>((observer) => {
      this.hubConnection.invoke('SendMessage',localStorage.getItem('Id'), reciver, message)
        .then(() => {
          observer.next();
          observer.complete();
        })
        .catch((error:any) => observer.error(error));
    });
  }

  receiveMessage(): Observable<[string, string]> {
    return new Observable<[string, string]>((observer) => {
      this.hubConnection.on('ReceiveMessage', (user: string, message: string) => {
        observer.next([user, message]);
      });
    });
  }
}











  ////old code
//   public async initiateSignalrConnection(): Promise<void> {
//     this.token = localStorage.getItem('token');
//     if (this.token != null) {
//       try {
//         this.connection = new signalR.HubConnectionBuilder()
//           .withUrl(
//             this.hubUrl,
//             {
//               accessTokenFactory: () => this.token
//             })
//           .withAutomaticReconnect()
//           .build();

//         await this.connection.start({ withCredentials: false });
//         //this.setSignalrClientMethods();

//         console.log(`SignalR connection success! connectionId: ${this.connection.connectionId}`);
//         localStorage.setItem('SignalRId', this.connection.connectionId);
//       }
//       catch (error) {
//         console.log(`SignalR connection error: ${error}`);
//       }
//     }
//   }
//   // private setSignalrClientMethods(): void {
//   //   this.connection.on('DisplayMessage', (message: string) => {
//   //     this.hubMessage.next(message);
//   //   });
//   // }
//   public async sendMessageToUser(senderId: string, reciverId: string, message: string): Promise<void> {
//     try {
//       await this.connection.invoke('SendMessage', senderId, reciverId, message);
//       console.log(`Message sent to user ${reciverId}: ${message}`);
//     } catch (error) {
//       console.log(`Error sending message to user ${reciverId}: ${error}`);
//     }
//   }
//   public registerSignalREvents() {
//     this.connection.on('ReceiveMessage', (message: string) => {
//       this.messages.push(message);
//     });
//   }
// }