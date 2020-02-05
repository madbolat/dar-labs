import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  public formSubmitted:boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl('', Validators.required),
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
      localStorage.setItem("dar-lab-auth", this.form.value['login']);
      this.router.navigate(['/']);
    } else {

    }
  }

}
