import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterOfPageComponent } from './footer-of-page.component';

describe('FooterOfPageComponent', () => {
  let component: FooterOfPageComponent;
  let fixture: ComponentFixture<FooterOfPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterOfPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterOfPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
