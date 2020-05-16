import { Component } from "@angular/core";
import { AuthenticationService, TokenPayload } from "../authentication.service";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  templateUrl: "./register.component.html",
  styleUrls: ['./register.component.less']
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

  constructor(public auth: AuthenticationService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      college: ['', Validators.required]
    });
  }
  get f() { return this.registerForm.controls; }

  register() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.auth.register(this.credentials).subscribe(
      () => {
        document.getElementById('alertMessage').innerText = 'Registration Successful';
        document.getElementById('alertBox').style.visibility = "visible";
        document.getElementById('alertBox').style.backgroundColor = "rgb(131, 255, 126)";
        document.getElementById('alertBox').style.border = "1px solid green";
        setTimeout(() => this.router.navigateByUrl("/profile"), 1500);
      },
      err => {
        document.getElementById('alertMessage').innerText = 'Username already exists';
        document.getElementById('alertBox').style.visibility = "visible";
        this.loading = false;
      }
    );
    setTimeout(() => document.getElementById('alertBox').style.visibility = "hidden", 5000);
  }
}