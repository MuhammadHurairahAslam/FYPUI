import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAMentorComponent } from './request-a-mentor.component';

describe('RequestAMentorComponent', () => {
  let component: RequestAMentorComponent;
  let fixture: ComponentFixture<RequestAMentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestAMentorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestAMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
