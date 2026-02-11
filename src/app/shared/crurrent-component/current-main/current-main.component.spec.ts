import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentMainComponent } from './current-main.component';

describe('CurrentMainComponent', () => {
  let component: CurrentMainComponent;
  let fixture: ComponentFixture<CurrentMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
