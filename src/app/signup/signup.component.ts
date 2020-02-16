import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// My imports
import { AuthRestService } from '../shared/auth-rest.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  public formSubmitted:boolean = false;
  public passNotConfirm:boolean = false;

  constructor(
    private router: Router,
    private authRestService: AuthRestService
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirm: new FormControl('', Validators.required),
    });
  }

  signup() {
    if(!this.form.valid) {
      this.formSubmitted = true;
      return;
    }
    if(this.form.get('password').value == this.form.get('confirm').value) {
      let user = {
        username : this.form.value['login'], 
        firstName : this.form.value['firstName'], 
        lastName : this.form.value['lastName'], 
        password : this.form.value['password']
      };
      this.authRestService.signUp(user)
      .subscribe(auth => {
        if(auth) {
          this.router.navigate(['/login']);
        } else {
          this.form.reset();
          this.formSubmitted = true;
          return;
        }
      });
    } else {
      this.passNotConfirm = true;
      this.formSubmitted = true;
      return;
    }
  }

}
