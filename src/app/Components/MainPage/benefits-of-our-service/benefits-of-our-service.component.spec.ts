import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsOfOurServiceComponent } from './benefits-of-our-service.component';

describe('BenefitsOfOurServiceComponent', () => {
  let component: BenefitsOfOurServiceComponent;
  let fixture: ComponentFixture<BenefitsOfOurServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitsOfOurServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenefitsOfOurServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
