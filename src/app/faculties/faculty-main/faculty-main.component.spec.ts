import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyMainComponent } from './faculty-main.component';

describe('FacultyMainComponent', () => {
  let component: FacultyMainComponent;
  let fixture: ComponentFixture<FacultyMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
