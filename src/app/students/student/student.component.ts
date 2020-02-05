import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
// import { mergeMap } from 'rxjs/operators';
// import { of } from 'rxjs';

// My imports
import { Student } from '../student.types';
import { StudentRestService } from '../student-rest.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  form: FormGroup;
  student: Student;

  public formSubmitted:boolean = false;
  courseAdded = false;
  title = 'Create';

  constructor(
    private studentRestService: StudentRestService, 
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      score: new FormControl('', Validators.required),
      courses: new FormArray([]),
    });

    // GET STUDENT BY ID AND SET TO FORM
    this.route.data.subscribe(data => {
      if(data.student) {
        this.title = 'Edit';
        this.student = data.student;
        this.form.patchValue(data.student);
        // Patch courses
        if(this.student.courses) {
          this.courseAdded = true;
          this.student.courses.forEach(course => {
            const controls = this.form.get('courses') as FormArray;
            controls.push(new FormGroup({
              name: new FormControl(course.name, Validators.required)
            }));
          })
        }
      }
    });
  }

  // ADD COURSE
  addCourse() {
    this.courseAdded = true;
    const arrayControl = this.form.get('courses') as FormArray;
    arrayControl.push(new FormGroup({
      name: new FormControl('', Validators.required),
    }));
  }
  
  // ADD/EDIT NEW STUDENT
  addStudent() {
    if(!this.form.valid) {
      this.formSubmitted = true;
      return;
    }
    const newStudent: Student = {
      firstName: this.form.get('firstName').value, 
      lastName: this.form.get('lastName').value, 
      score: this.form.get('score').value,
      courses: this.form.get('courses').value,
    };
    // UPDATE STUDENT
    if(this.student) {
      this.student = {...this.student, ...newStudent}
      this.studentRestService.updateStudent(this.student).
      subscribe(student => {
        if(student) {
          this.router.navigate(['students'])
        }
      });
      return;
    }
    // CREATE STUDENT
    this.studentRestService.createStudent(newStudent)
    .subscribe(student => {
      if(student) {
        this.router.navigate(['students'])
      }
    });
  }

}
