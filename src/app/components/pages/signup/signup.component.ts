import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/Interfaces/user.interface';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  signupForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      username: [''],
      email: [''],
      password: [''],
    });
  }

  createAccount() {
    this.http
      .post<User>(`${environment.signupMockUrl}`, this.signupForm.value)
      .subscribe({
        next: (res) => {
          this.signupForm.reset();
          alert('Sign Up Successfull');
          this.router.navigate(['/login']);
        },
        error: (err) => {
          alert('Something went wrong...');
        },
      });
  }
}
