import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorRegisterationComponent } from './mentor-registeration.component';

describe('MentorRegisterationComponent', () => {
  let component: MentorRegisterationComponent;
  let fixture: ComponentFixture<MentorRegisterationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorRegisterationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentorRegisterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
