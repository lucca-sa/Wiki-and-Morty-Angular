import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) {}

  // Getter para obter o nome de usuário logado do serviço de usuário
  get loggedInUserName$() {
    return this.userService.loggedInUserName$;
  }

  ngOnInit(): void {
    // Espera até que o serviço do usuário esteja inicializado
    this.userService.loggedInUserName$.subscribe((loggedInUserName) => {
      if (!loggedInUserName) {
        const storedUserName = localStorage.getItem('activeUser');

        // Atualiza o nome do usuário no serviço apenas se houver um nome armazenado
        if (storedUserName) {
          this.userService.updateLoggedInUserName(storedUserName);
        }
      }
    });
  }

  onLogout() {
    // Remove o nome de usuário armazenado localmente e atualiza o serviço de usuário
    localStorage.removeItem('activeUser');
    this.userService.updateLoggedInUserName(null);
    this.router.navigate(['/login']);
  }

  onLogin() {
    this.router.navigate(['/login']);
  }
}
