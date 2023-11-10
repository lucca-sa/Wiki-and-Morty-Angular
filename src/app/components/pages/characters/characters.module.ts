import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterComponent } from './character.component';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

const characterComponents = [
  CharacterDetailsComponent,
  CharacterListComponent,
  CharacterComponent,
];

@NgModule({
  declarations: [...characterComponents],
  imports: [CommonModule, RouterModule, InfiniteScrollModule],
  exports: [...characterComponents],
})
export class CharactersModule {}
