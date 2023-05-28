import { Component, OnInit, OnDestroy } from '@angular/core';
import { SignalrService } from 'src/app/Services/SignlR/signal-r.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
  messages: { user: string, message: string }[] = [];
  user: any;
  message: any;
  data:any;
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private chatService: SignalrService,private route: ActivatedRoute) { }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.data = window.history.state.data;
      console.log(this.data);
    this.chatService.startConnection()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.chatService.receiveMessage()
          .pipe(takeUntil(this.unsubscribe$))
          .subscribe(([user, message]) => {
            console.log("Recived from SignalR",user,message)
            this.messages.push({ user, message });
          });
      });
  }
)}


sendMessage(): void {
  this.chatService.sendMessage(this.data.id, this.message)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(() => {
      // Clear the input fields after sending the message
      this.user = '';
      this.message = '';
    });
}
}



