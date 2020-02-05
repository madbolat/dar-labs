import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// My imports
import { Faculty } from '../faculty.types';
import { FacultyRestService } from '../faculty-rest.service';

@Component({
  selector: 'app-faculty-main',
  templateUrl: './faculty-main.component.html',
  styleUrls: ['./faculty-main.component.scss']
})
export class FacultyMainComponent implements OnInit {
  public searchQuery: string = '';
  
  public facultiesToShow: Faculty[] = [];
  public faculties: Faculty[] = [];

  constructor(
    private facultyRestService: FacultyRestService, 
    private router: Router
    ) { }

    ngOnInit() {
      this.getFaculties();
      this.facultiesToShow = [...this.faculties];
    }
    
    // GET FACULTIES
    getFaculties() {
      this.facultyRestService.getFaculties()
      .subscribe(faculties => {
        this.faculties = faculties;
        this.facultiesToShow = [...this.faculties];
      });
    }

    // SEARCH FACULTY BY NAME
    search() {
      this.facultiesToShow = this.faculties.filter(
        faculty => faculty.name.toLocaleLowerCase().includes(this.searchQuery.toLocaleLowerCase())
      )
    } 
    
    // DELETE FACULTY
    delFaculty(id: string) {
      this.facultyRestService.deleteFaculty(id)
      .subscribe(faculty => {
        this.getFaculties();
      });
    }
  
    // EDIT FACULTY
    editFaculty(faculty: Faculty) {
      this.router.navigate(['faculties/faculty', faculty.id]);
    }
    
}
