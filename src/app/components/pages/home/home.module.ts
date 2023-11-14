import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CharactersModule } from '../characters/characters.module';
import { HeaderModule } from 'src/app/shared/components/header/header.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, CharactersModule, HeaderModule],
})
export class HomeModule {}
