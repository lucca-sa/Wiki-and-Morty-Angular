import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable, take } from 'rxjs';
import { Character } from 'src/app/shared/Interfaces/character.interface';
import { CharacterService } from 'src/app/shared/services/character.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
})
export class CharacterDetailsComponent {
  character$?: Observable<Character>;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Obtém os parâmetros da rota
    this.route.params.pipe(take(1)).subscribe((params) => {
      // Extrai o ID do parâmetro
      const id = params['id'];
      // Chama o serviço para obter os detalhes do personagem
      this.character$ = this.characterService.getDetails(id);
    });
  }

  // Método para obter a classe CSS com base no status do personagem(Morto ou vivo)
  getStatusCircleClass(status: string): string {
    switch (status) {
      case 'Dead':
        return 'status-dead';
      case 'Alive':
        return 'status-alive';
      default:
        return 'status-unknown';
    }
  }

  onGoBack(): void {
    this.router.navigate(['/character-list']);
  }

  // Método para extrair o número do link da API
  extractNumberFromLink(link: string): number | null {
    // Divide o link em partes usando '/' como delimitador
    const linkParts: string[] = link.split('/');
    // Obtém o último elemento do array (número)
    const numberStr: string = linkParts[linkParts.length - 1];
    // Converte o número para inteiro
    const extractedNumber: number = parseInt(numberStr, 10);

    // Verifica se o número é válido
    if (!isNaN(extractedNumber)) {
      return extractedNumber;
    } else {
      return null;
    }
  }
}
