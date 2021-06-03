import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyFooterComponent } from './agency-footer.component';

describe('AgencyFooterComponent', () => {
  let component: AgencyFooterComponent;
  let fixture: ComponentFixture<AgencyFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencyFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
