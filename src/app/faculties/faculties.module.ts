import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// My imports
import { FacultyMainComponent } from './faculty-main/faculty-main.component';
import { FacultyComponent } from './faculty/faculty.component';

const routes: Route[] = [
  { path: 'faculties', component: FacultyMainComponent },
  { path: 'faculty/:id', component: FacultyComponent },
  { path: 'faculty', component: FacultyComponent },
];

@NgModule({
  declarations: [
    FacultyMainComponent,
    FacultyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class FacultiesModule { }
