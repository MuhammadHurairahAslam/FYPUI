import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchATutorComponent } from './search-a-tutor.component';

describe('SearchATutorComponent', () => {
  let component: SearchATutorComponent;
  let fixture: ComponentFixture<SearchATutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchATutorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchATutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
