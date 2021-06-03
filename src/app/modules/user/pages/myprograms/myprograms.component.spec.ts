import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyprogramsComponent } from './myprograms.component';

describe('MyprogramsComponent', () => {
  let component: MyprogramsComponent;
  let fixture: ComponentFixture<MyprogramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyprogramsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyprogramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
