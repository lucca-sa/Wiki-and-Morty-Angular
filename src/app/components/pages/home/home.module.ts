import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { CharactersModule } from '../characters/characters.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, CharactersModule, HeaderModule],
})
export class HomeModule {}
