import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSedeModalComponent } from './add-sede-modal.component';

describe('AddSedeModalComponent', () => {
  let component: AddSedeModalComponent;
  let fixture: ComponentFixture<AddSedeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSedeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSedeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
