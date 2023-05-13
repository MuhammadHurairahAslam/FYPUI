import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorProfileOpenComponent } from './mentor-profile-open.component';

describe('MentorProfileOpenComponent', () => {
  let component: MentorProfileOpenComponent;
  let fixture: ComponentFixture<MentorProfileOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorProfileOpenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentorProfileOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
