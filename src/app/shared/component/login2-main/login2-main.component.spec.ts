import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Login2MainComponent } from './login2-main.component';

describe('Login2MainComponent', () => {
  let component: Login2MainComponent;
  let fixture: ComponentFixture<Login2MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Login2MainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Login2MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
