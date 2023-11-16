// login.component.ts
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    // Inicializa o formulário de login com validadores
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
    // Verifica se o formulário é válido
    if (this.loginForm.valid) {
      // Faz uma chamada HTTP para obter usuários mockados (simulado)
      this.http.get<any[]>(environment.signupMockUrl).subscribe((users) => {
        // Encontra o usuário ativo com base no nome de usuário e senha fornecidos
        this.activeUser = users.find(
          (user) =>
            user.username === this.loginForm.value.username &&
            user.password === this.loginForm.value.password
        );

        // Se o usuário ativo for encontrado
        if (this.activeUser) {
          // Armazena o nome do usuário ativo no armazenamento local
          localStorage.setItem('activeUser', this.activeUser.username);
          // Atualiza o nome do usuário logado no serviço UserService
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
    // Remove o usuário ativo do armazenamento local
    localStorage.removeItem('activeUser');
    // Atualiza o nome do usuário logado no serviço UserService para nulo
    this.userService.updateLoggedInUserName(null);

    this.router.navigate(['/login']);
  }
}
