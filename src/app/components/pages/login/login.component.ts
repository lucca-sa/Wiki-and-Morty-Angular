// login.component.ts
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  activeUser!: any;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  // Getter para facilitar o acesso aos controles do formulário
  get formControls() {
    return this.loginForm.controls;
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.http.get<any[]>(environment.signupMockUrl).subscribe((users) => {
        this.activeUser = users.find(
          (user) =>
            user.username === this.loginForm.value.username &&
            user.password === this.loginForm.value.password
        );

        if (this.activeUser) {
          localStorage.setItem('activeUser', this.activeUser.username);
          this.userService.updateLoggedInUserName(this.activeUser.username);

          alert('Login Successfully');
          this.loginForm.reset();
          this.router.navigate(['/home']);
        } else {
          alert('Invalid username or password.');
        }
      });
    } else {
      alert('Fill the form correctly.');
    }
  }

  onLogOut() {
    localStorage.removeItem('activeUser');
    this.userService.updateLoggedInUserName(null);

    this.router.navigate(['/login']);
  }
}
