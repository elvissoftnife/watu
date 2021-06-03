import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProgramModalComponent } from './edit-program-modal.component';

describe('EditProgramModalComponent', () => {
  let component: EditProgramModalComponent;
  let fixture: ComponentFixture<EditProgramModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProgramModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProgramModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
