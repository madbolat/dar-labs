import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

// My imports
import { FacultyRestService } from '../faculty-rest.service';
import { Faculty } from '../faculty.types';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})
export class FacultyComponent implements OnInit {
  form: FormGroup;
  faculty: Faculty;
  public formSubmitted:boolean = false;
  title = 'Create';

  constructor(
    private facultyRestService: FacultyRestService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
    });

    // GET FACULTY BY ID AND SET TO FORM
    this.route.params.subscribe(params => {
      if(params.id) {
        this.title = 'Edit';
        this.facultyRestService.getFaculty(params.id)
        .subscribe(faculty => {
          this.faculty = faculty;
          this.form.patchValue(this.faculty);
        });
      }
    });
  }

  // ADD/EDIT NEW FACULTY
  addFaculty() {
    if(!this.form.valid) {
      this.formSubmitted = true;
      return;
    }
    const newFaculty: Faculty = {
      name: this.form.get('name').value
    };

    // UPDATE FACULTY
    if(this.faculty) {
      this.faculty = {...this.faculty, ...newFaculty}
      this.facultyRestService.updateFaculty(this.faculty).
      subscribe(faculty => {
        if(faculty) {
          this.router.navigate(['faculties'])
        }
      });
      return;
    }
    // CREATE FACULTY
    this.facultyRestService.createFaculty(newFaculty)
    .subscribe(faculty => {
      if(faculty) {
        this.router.navigate(['faculties'])
      }
    });
  }

}
