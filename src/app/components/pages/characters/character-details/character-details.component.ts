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
    this.route.params.pipe(take(1)).subscribe((params) => {
      const id = params['id'];
      this.character$ = this.characterService.getDetails(id);
    });
  }

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

  extrairNumeroDoLink(link: string): number | null {
    const partesDoLink: string[] = link.split('/');
    const numero: string = partesDoLink[partesDoLink.length - 1];
    const numeroExtraido: number = parseInt(numero, 10);

    if (!isNaN(numeroExtraido)) {
      return numeroExtraido;
    } else {
      return null;
    }
  }
}
