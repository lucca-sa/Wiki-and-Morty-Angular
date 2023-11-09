import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterListComponent } from './character-list/character-list.component';

const characterComponents = [CharacterDetailsComponent, CharacterListComponent];

@NgModule({
  declarations: [...characterComponents],
  imports: [CommonModule, RouterModule],
  exports: [...characterComponents],
})
export class CharactersModule {}
