import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionsProgramComponent } from './inscriptions-program.component';

describe('InscriptionsProgramComponent', () => {
  let component: InscriptionsProgramComponent;
  let fixture: ComponentFixture<InscriptionsProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionsProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionsProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
