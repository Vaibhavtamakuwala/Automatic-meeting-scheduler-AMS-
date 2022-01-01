import { ClassSansProvider, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import {  Data, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { LoginService } from '../http-services/login/login.service';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'kykz-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  hide = true;
  loading = false;
  submitted = false;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router, private toast: ToastrService) {}
     
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      password: ['', Validators.required],
      email: ['', Validators.required, Validators.email]

    });
  }

  get f() { return this.loginForm.controls; }

  // Executed When Form Is Submitted  
  onFormSubmit(form: NgForm, formDirective: FormGroupDirective) {
    
    this.submitted = true;

    if (this.loginForm.invalid) {
      this.toast.warning('Something went wrong!');
    }

    this.loading = true;
    this.loginService.login(this.f.email.value, this.f.password.value)
    .pipe(first())
    .subscribe({
      next: () => {
          // get return url from query parameters or default to home page
          this.toast.success("Login successfully.")
          this.loginForm.reset();
          this.router.navigate(["calendar"]);
      }, error: error => {
       this.toast.error("Invalid Email or password!");
        this.loading = false;
    }
  });
  }
}

