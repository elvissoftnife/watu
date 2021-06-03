import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityContainerComponent } from './security-container.component';

describe('SecurityContainerComponent', () => {
  let component: SecurityContainerComponent;
  let fixture: ComponentFixture<SecurityContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
