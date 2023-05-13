import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Injectable({
  providedIn: 'root'
})
export class OpenModelService {
  constructor(private modalService: NgbModal) {}

  openModal() {
    const modalRef = this.modalService.open(MyModalComponent, { size: 'lg' });
    modalRef.componentInstance.foo = 'bar';
  }
}