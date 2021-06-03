import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityNavComponent } from './security-nav.component';

describe('SecurityNavComponent', () => {
  let component: SecurityNavComponent;
  let fixture: ComponentFixture<SecurityNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
