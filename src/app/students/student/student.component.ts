import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Student } from '../student.types';
import { StudentRestService } from '../student-rest.service';
import { Router, ActivatedRoute } from '@angular/router';
// import { mergeMap } from 'rxjs/operators';
// import { of } from 'rxjs';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  form: FormGroup;
  public formSubmitted:boolean = false;
  student: Student;
  title = 'Create';
  courseAdded = false;

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
    this.route.params.subscribe(params => {
      if(params.id) {
        this.title = 'Edit';
        this.studentRestService.getStudent(params.id)
        .subscribe(student => {
          this.student = student;
          // console.log(this.student);
          this.form.patchValue(this.student);
          if(this.student.courses) {
            this.courseAdded = true;
            this.student.courses.forEach(course => {
              const controls = this.form.get('courses') as FormArray;
              controls.push(new FormGroup({
                name: new FormControl(course.name, Validators.required)
              }));
            })
          }
        });
      }
    });
  }

  addCourse() {
    this.courseAdded = true;
    const arrayControl = this.form.get('courses') as FormArray;
    arrayControl.push(new FormGroup({
      name: new FormControl('', Validators.required),
    }));
  }
  
  // ADD NEW STUDENT
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

    this.studentRestService.createStudent(newStudent)
    .subscribe(student => {
      if(student) {
        this.router.navigate(['students'])
      }
    });
  }

}
