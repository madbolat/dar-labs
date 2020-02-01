import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentsModule } from './students/students.module';
import { StudentComponent } from './students/student/student.component';
import { PnfComponent } from './pnf/pnf.component';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: '::', component: PnfComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    PnfComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StudentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
