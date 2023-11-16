import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  ParamMap,
  Router,
} from '@angular/router';

import { filter, take } from 'rxjs';
import { Character } from 'src/app/shared/Interfaces/character.interface';
import { CharacterService } from 'src/app/shared/services/character.service';

type RequestInfo = {
  next: string | null;
};

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent {
  characters: Character[] = [];

  info: RequestInfo = {
    next: null,
  };
  showGoUpButton = false;
  thisPage = 'character';
  private pageNum = 1;
  private query!: string;
  private hideScrollHeight = 200;
  private showScrollHeight = 500;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private characterService: CharacterService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Observa alterações nos parâmetros de consulta da URL
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      // Obtém a query de pesquisa da URL
      this.query = params.get('q') || '';
      // Executa a lógica quando a URL é alterada
      this.onUrlChange();
      // Obtém dados do serviço
      this.getDataFromService();
    });
  }

  // Método executado quando ocorre um evento de rolagem na janela
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    // Obtém o deslocamento vertical da janela
    const yOffSet = window.scrollY;
    // Verifica se deve mostrar ou ocultar o botão de voltar ao topo
    if (
      (yOffSet ||
        this.document.documentElement.scrollTop ||
        this.document.body.scrollTop) > this.showScrollHeight
    ) {
      this.showGoUpButton = true;
    } else if (
      this.showGoUpButton &&
      (yOffSet ||
        this.document.documentElement.scrollTop ||
        this.document.body.scrollTop) < this.hideScrollHeight
    ) {
      this.showGoUpButton = false;
    }
  }

  // Método executado quando ocorre um evento de rolagem para baixo
  onScrollDown() {
    // Verifica se há mais páginas para carregar
    if (this.info.next) {
      // Incrementa o número da página e obtém mais dados do serviço
      this.pageNum++;
      this.getDataFromService();
    }
  }

  // Método executado pelo botão de "Go UP"
  onScrollUp(): void {
    this.document.body.scrollTop = 0; // Safari
    this.document.documentElement.scrollTop = 0; // Outros navegadores
  }

  private onUrlChange(): void {
    // Observa eventos de navegação e executa a lógica quando a navegação termina
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        // Limpa a lista de personagens e reinicia o número da página
        this.characters = [];
        this.pageNum = 1;
        // Obtém dados do serviço
        this.getDataFromService();
      });
  }

  private getDataFromService(): void {
    // Chama o serviço para buscar personagens com base na query e número da página
    this.characterService
      .searchCharacters(this.query, this.pageNum)
      .pipe(take(1))
      .subscribe((res: any) => {
        // Extrai informações da resposta
        const { info, results } = res;
        if (this.pageNum === 1) {
          this.characters = [];
        }
        // Adiciona os resultados à lista de personagens
        this.characters = [...this.characters, ...results];
        // Atualiza as informações da requisição
        this.info = info;
      });
  }

  onGoBack(): void {
    this.router.navigate(['/home']);
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
}
