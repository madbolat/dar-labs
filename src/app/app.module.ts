import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PnfComponent } from './pnf/pnf.component';

import { StudentsModule } from './students/students.module';
import { FacultiesModule } from './faculties/faculties.module';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: '::', component: PnfComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PnfComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StudentsModule,
    FacultiesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
