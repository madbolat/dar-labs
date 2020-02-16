import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// My imports
import { AuthRestService } from '../shared/auth-rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  public error: boolean = false;
  public formSubmitted:boolean = false;

  constructor(
    private router: Router,
    private authRestService: AuthRestService
    ) { }

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  login() {
    if(!this.form.valid) {
      this.formSubmitted = true;
      return;
    }
    let user = {
      username : this.form.value['login'], 
      password : this.form.value['password']
    };
    this.authRestService.signIn(user)
    .subscribe(auth => {
      if(auth.status === "success") {
        localStorage.setItem("dar-lab-auth", auth.token);
        localStorage.setItem("username", user.username);
        this.router.navigate(['/']);
      } else {
        this.form.reset();
        this.formSubmitted = true;
        this.error = true;
        return;
      }
    });
  }

}
