import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: 'location-details/null',
    redirectTo: 'location-list',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./components/pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'character-list',
    loadChildren: () =>
      import(
        './components/pages/characters/character-list/character-list.module'
      ).then((m) => m.CharacterListModule),
  },
  {
    path: 'character-details',
    loadChildren: () =>
      import(
        './components/pages/characters/character-details/character-details.module'
      ).then((m) => m.CharacterDetailsModule),
  },
  {
    path: 'location-list',
    loadChildren: () =>
      import(
        './components/pages/locations/location-list/location-list.module'
      ).then((m) => m.LocationListModule),
  },
  {
    path: 'location-details',
    loadChildren: () =>
      import(
        './components/pages/locations/location-details/location-details.module'
      ).then((m) => m.LocationDetailsModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./components/pages/login/login.module').then(
        (m) => m.LoginModule
      ),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./components/pages/signup/signup.module').then(
        (m) => m.SignupModule
      ),
  },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./components/pages/welcome/welcome.module').then(
        (m) => m.WelcomeModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
