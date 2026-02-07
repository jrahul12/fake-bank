import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForUserShowComponent } from './for-user-show.component';

describe('ForUserShowComponent', () => {
  let component: ForUserShowComponent;
  let fixture: ComponentFixture<ForUserShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForUserShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForUserShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
