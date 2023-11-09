import { Component } from '@angular/core';
import { Character } from 'src/app/shared/Interfaces/character.interface';
import { CharacterService } from 'src/app/shared/services/character.service';

import { take } from 'rxjs';

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
  private pageNum = 1;
  private query!: string;
  private hideScrollHeight = 200;
  private showScrollHeight = 500;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.getDataFromService();
  }

  private getDataFromService(): void {
    this.characterService
      .searchCharacters(this.query, this.pageNum)
      .pipe(take(1))
      .subscribe((res: any) => {
        console.log('response ->', res);
        const { info, results } = res;
        this.characters = [...this.characters, ...results];
        this.info = info;
      });
  }
}
