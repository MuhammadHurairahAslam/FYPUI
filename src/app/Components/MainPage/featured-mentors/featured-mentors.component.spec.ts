import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedMentorsComponent } from './featured-mentors.component';

describe('FeaturedMentorsComponent', () => {
  let component: FeaturedMentorsComponent;
  let fixture: ComponentFixture<FeaturedMentorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedMentorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedMentorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
