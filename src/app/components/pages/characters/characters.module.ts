import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterListComponent } from './character-list/character-list.component';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { SharedFormModule } from 'src/app/shared/components/search-form/search-form.module';

const characterComponents = [CharacterDetailsComponent, CharacterListComponent];

@NgModule({
  declarations: [...characterComponents],
  imports: [
    CommonModule,
    RouterModule,
    InfiniteScrollModule,
    SharedFormModule,
    HeaderModule,
  ],
  exports: [...characterComponents],
})
export class CharactersModule {}
