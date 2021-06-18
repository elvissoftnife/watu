import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSedeModalComponent } from './edit-sede-modal.component';

describe('EditSedeModalComponent', () => {
  let component: EditSedeModalComponent;
  let fixture: ComponentFixture<EditSedeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSedeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSedeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
