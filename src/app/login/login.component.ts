import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  submitted = false;
  loginForm: FormGroup;
  loading = false;
  returnUrl: string;

  credentials: TokenPayload = {
    id: 0,
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    college: ''
  }

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private auth: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.loginForm.controls; }
  login() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.auth.login(this.credentials)
      .subscribe(
        () => {
          if (this.f.email.value == 'Admin') {
            this.router.navigate([this.f.email.value]);
          } else
            this.router.navigateByUrl('/home')
        },
        err => {
          document.getElementById('alertMessage').innerText = 'Invalid Username or Password';
          document.getElementById('alertBox').style.visibility = "visible";
          setTimeout(() => document.getElementById('alertBox').style.visibility = "hidden", 2000);
          this.loading = false;
        }
      );
  }
}