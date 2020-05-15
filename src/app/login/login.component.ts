import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';
import { AlertService } from '../_services/alert.service';
import { first } from 'rxjs/operators';

@Component({
  templateUrl: './login.component.html',
  styleUrls:['./login.component.less']
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
    college:''
  }

  constructor(private alertService: AlertService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private auth: AuthenticationService, 
              private router: Router) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
}

get f() { return this.loginForm.controls; }
  login() {
    this.submitted = true;

        // reset alerts on submit
    this.alertService.clear();

    if (this.loginForm.invalid) {
      return;
  }
  this.loading = true;
    this.auth.login(this.loginForm.value)
    .pipe(first())
    .subscribe(
      data => {
      if(this.f.email.value == 'Admin'){
          this.router.navigate([this.f.email.value]);
      }else
        this.router.navigateByUrl('/home')
      },
      err => {
        this.alertService.error('Login Error: Username or Password is Invalid');
        this.loading = false;
      }
    )
  }
}