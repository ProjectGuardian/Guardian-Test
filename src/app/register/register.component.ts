import { Component } from "@angular/core";
import { AuthenticationService, TokenPayload } from "../authentication.service";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AlertService } from "@/_services/alert.service";
import { first } from "rxjs/operators";

@Component({
  templateUrl: "./register.component.html",
  styleUrls:['./register.component.less']
})
export class RegisterComponent {
  registerForm: FormGroup;
    loading = false;
    submitted = false;
  credentials: TokenPayload = {
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    college: ""
  };

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthenticationService, 
    private router: Router,
    private alertService: AlertService) {}

ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            college: ['', Validators.required]
        });
    }
    
    get f() { return this.registerForm.controls; }

  register() {
    this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
    this.auth.register(this.credentials).pipe(first()).subscribe(
      () => {
        this.alertService.success('Registration successful', true);
        this.router.navigate(['/login']);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      }
    );
  }
}