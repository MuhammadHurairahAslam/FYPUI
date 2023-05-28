import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAJobComponent } from './request-ajob.component';

describe('RequestAJobComponent', () => {
  let component: RequestAJobComponent;
  let fixture: ComponentFixture<RequestAJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestAJobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestAJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
