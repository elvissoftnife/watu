import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyContainerComponent } from './agency-container.component';

describe('AgencyContainerComponent', () => {
  let component: AgencyContainerComponent;
  let fixture: ComponentFixture<AgencyContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencyContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
