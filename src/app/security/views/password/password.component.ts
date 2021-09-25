import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  passwordForm: FormGroup;
  passwordInvalid = false;

  constructor(private authService: AuthService, private formBuilder: FormBuilder) {
    this.passwordForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.maxLength(150)]],
      password: ['', [Validators.required, Validators.maxLength(200)]]
    })
  }

  ngOnInit(): void { }

  changePassword() {
    this.passwordInvalid = false
    if ((this.passwordForm.value.username != '' && this.passwordForm.value.password != '')) {
      console.log('Successful');
      this.authService.changePassword(this.passwordForm.getRawValue()).subscribe({
        error: (err) => {
          console.log(err);
          this.passwordInvalid = true;
        },
        next: (res) => {
          window.location.href = '/LogIn';
        },
        complete: () => {
          console.log('complete');
        },
      });
    } else {
      console.log('Complete Form');
    }
  }

  back() {
    window.location.href = '/LogIn';
  }
}
