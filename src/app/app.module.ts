import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';

// My imports
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PnfComponent } from './pnf/pnf.component';
import { AuthGuard } from './shared/auth.guard';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';

const routes: Route[] = [
  { 
    path: '', 
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeComponent },
      { 
        path: 'students', 
        loadChildren: () => 
        import('./students/students.module').then(m => m.StudentsModule)
      },
      { 
        path: 'faculties', 
        loadChildren: () => 
        import('./faculties/faculties.module').then(m => m.FacultiesModule)
      },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '::', component: PnfComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PnfComponent,
    LoginComponent,
    DashboardComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
