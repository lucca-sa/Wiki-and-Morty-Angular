import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
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
    // Inicializa o formulário de cadastro com validadores
    this.signupForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  // Getter para facilitar o acesso aos controles do formulário
  get formControls() {
    return this.signupForm.controls;
  }

  // Método para verificar a disponibilidade de um nome de usuário
  checkUsernameAvailability(username: string): Observable<boolean> {
    const url = `${environment.signupMockUrl}?username=${username}`;

    return this.http.get<User[]>(url).pipe(
      map((users) => users.length === 0),
      catchError(() => of(true))
    );
  }

  createAccount() {
    // Verifica se o formulário é válido
    if (this.signupForm.valid) {
      const username = this.signupForm.value.username;

      // Verifica a disponibilidade do nome de usuário
      this.checkUsernameAvailability(username).subscribe({
        next: (isAvailable) => {
          // Se o nome de usuário estiver disponível
          if (isAvailable) {
            // Faz uma chamada HTTP para criar a conta do usuário
            this.http
              .post<User>(environment.signupMockUrl, this.signupForm.value)
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
            alert('Username is already taken. Please choose a different one.');
          }
        },
        error: (err) => {
          alert('Something went wrong while checking username availability.');
        },
      });
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}
