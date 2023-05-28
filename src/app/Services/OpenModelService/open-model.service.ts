import { Injectable } from '@angular/core';
import { NgbModal ,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from 'src/app/Components/login/login.component';
import { RegisterationFormComponent } from 'src/app/Components/registeration-form/registeration-form.component';

import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs/operators';
import { SpinnerComponent } from 'src/app/Components/spinner/spinner.component';

@Injectable({
  providedIn: 'root'
})
export class OpenModelService {
  
  constructor(private modalService: NgbModal,private spinnerService: NgxSpinnerService) {}
  private currentModalRef: any;
 private temp:any;
 openSpinner(){
  
    this.temp=this.currentModalRef;
    console.log("calling spinners......");
    this.currentModalRef = this.modalService.open(SpinnerComponent, { windowClass: 'fullscreen-spinner-modal' });


   
 }
public hideSpinner(): void {
  this.spinnerService.hide();
}
  openLoginModal() {
    if (this.currentModalRef) {
      this.currentModalRef.close();
    }
    this.currentModalRef = this.modalService.open(LoginComponent, { size: 'md' });
    this.currentModalRef.componentInstance.foo = 'bar';

  }
  openRegisterationnModal() {
    if (this.currentModalRef) {
      this.currentModalRef.close();
    }
    this.currentModalRef = this.modalService.open(RegisterationFormComponent, { size: 'md' });
    this.currentModalRef.componentInstance.foo = 'bar';
  }
  closeModel(){
    this.currentModalRef.close();
  }
}