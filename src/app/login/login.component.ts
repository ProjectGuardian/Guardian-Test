import { Component } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';
import { AlertService } from '@/_services/alert.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls:['./login.component.less']
})
export class LoginComponent {
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

  constructor(private alertService: AlertService,private formBuilder: FormBuilder,private route: ActivatedRoute,private auth: AuthenticationService, private router: Router) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
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
    this.auth.login(this.credentials).subscribe(
      () => {
      if(this.f.username.value == 'Admin'){
          this.router.navigate([this.f.username.value]);
      }else
        this.router.navigateByUrl('/home')
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      }
    )
  }
}