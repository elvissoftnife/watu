import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityRegisterComponent } from './security-register.component';

describe('SecurityRegisterComponent', () => {
  let component: SecurityRegisterComponent;
  let fixture: ComponentFixture<SecurityRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
