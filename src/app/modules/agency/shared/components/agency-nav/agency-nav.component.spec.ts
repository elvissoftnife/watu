import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyNavComponent } from './agency-nav.component';

describe('AgencyNavComponent', () => {
  let component: AgencyNavComponent;
  let fixture: ComponentFixture<AgencyNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencyNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
