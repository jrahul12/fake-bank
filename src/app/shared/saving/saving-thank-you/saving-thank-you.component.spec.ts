import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingThankYouComponent } from './saving-thank-you.component';

describe('SavingThankYouComponent', () => {
  let component: SavingThankYouComponent;
  let fixture: ComponentFixture<SavingThankYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavingThankYouComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavingThankYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
