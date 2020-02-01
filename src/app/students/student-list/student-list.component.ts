import { Component, OnInit } from '@angular/core';
import { Student } from '../student.types';
import { StudentRestService } from '../student-rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  public searchQuery: string = '';
  
  public studentsToShow: Student[] = [];
  public students: Student[] = [];

  constructor(
    private studentRestService: StudentRestService, 
    private router: Router
    ) { }

  ngOnInit() {
    this.getStudents();
    this.studentsToShow = [...this.students];
  }

  // SEARCH STUDENT BY NAME
  search() {
    this.studentsToShow = this.students.filter(
      student => student.firstName.toLocaleLowerCase().includes(this.searchQuery.toLocaleLowerCase())
    )
  }
  
  // GET STUDENTS
  getStudents() {
    this.studentRestService.getStudents()
    .subscribe(students => {
      this.students = students;
      this.studentsToShow = [...this.students];
    });
  }

  // DELETE STUDENT
  delStudent(id: string) {
    this.studentRestService.deleteStudent(id)
    .subscribe(student => {
      this.getStudents();
      // console.log(student);
    });
  }

  editStudent(student: Student) {
    this.router.navigate(['student', student.id]);
  }

}
