import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private showSpinnerSubject: Subject<boolean> = new Subject<boolean>();
  showSpinner$ = this.showSpinnerSubject.asObservable();

  show(): void {
    this.showSpinnerSubject.next(true);
  }

  hide(): void {
    this.showSpinnerSubject.next(false);
  }
}