import { ClassSansProvider, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Data, Router } from '@angular/router';
import { LoginService } from '../http-services/login/login.service';
import { User } from '../model/login/user';
import{ToastrService} from 'ngx-toastr';

@Component({
  selector: 'kykz-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent implements OnInit {
  regiForm: FormGroup;
  schools: any[]=[];
  classes: any[]=[];
  hide = true;
  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router, private toastr: ToastrService) {
    
    // To initialize FormGroup  
    this.regiForm = fb.group({
      'firstName': ['', Validators.required],
      'middleName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'password': ['', Validators.required],
      'confirmPassword': ['', Validators.required],
      'email': ['', Validators.required]

    },{validator: ConfirmedValidator('password', 'confirmPassword')});
  }

  ngOnInit(): void {
  }
  user: User = new User();

  // Executed When Form Is Submitted  
  onFormSubmit(form: NgForm, formDirective: FormGroupDirective) {
    this.user = Object.assign(this.user, form);

    this.loginService.signup(this.user).subscribe((data: any) => {
      console.log(data)

      data = JSON.parse(data)
      if (this.regiForm.valid && data.success) {
        this.toastr.success("Signup successfully.");
        this.regiForm.reset();
        formDirective.resetForm();
        this.router.navigate(['login']);
      }
    }, err => {
      this.toastr.error("Someting went wrong!");
    }
    )

  }
}
export function ConfirmedValidator(controlName: string, matchingContrlName: string) {
  return (FormGroup: FormGroup) => {
    const control = FormGroup.controls[controlName];
    const matchingControl = FormGroup.controls[matchingContrlName];
    if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
      return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ confirmedValidator: true });
    } else {
      matchingControl.setErrors(null);
    }
  }
}