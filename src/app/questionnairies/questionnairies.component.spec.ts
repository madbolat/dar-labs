import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnairiesComponent } from './questionnairies.component';

describe('QuestionnairiesComponent', () => {
  let component: QuestionnairiesComponent;
  let fixture: ComponentFixture<QuestionnairiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnairiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnairiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
