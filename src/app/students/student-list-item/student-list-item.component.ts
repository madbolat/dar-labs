import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../student.types';

@Component({
  selector: '[app-student-list-item]',
  templateUrl: './student-list-item.component.html',
  styleUrls: ['./student-list-item.component.scss']
})
export class StudentListItemComponent implements OnInit {

  @Input() student: Student;
  @Output() delEvent = new EventEmitter();
  @Output() editEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  // EDIT STUDENT
  editStud(student: Student) {
    this.editEvent.emit(student);
  }

  // DELETE STUDENT
  delStud(id: string) {
    this.delEvent.emit(id);
  }

}