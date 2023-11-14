import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/Interfaces/user.interface';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  get formControls() {
    return this.signupForm.controls;
  }

  createAccount() {
    if (this.signupForm.valid) {
      this.http
        .post<User>(`${environment.signupMockUrl}`, this.signupForm.value)
        .subscribe({
          next: (res) => {
            this.signupForm.reset();
            alert('Sign Up Successfully');
            this.router.navigate(['/login']);
          },
          error: (err) => {
            alert('Something went wrong...');
          },
        });
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}
