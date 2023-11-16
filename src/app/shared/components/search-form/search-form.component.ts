import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent {
  @Input() thisPage!: string;

  constructor(private router: Router) {}

  onSearch(value: string) {
    // Navega para a página de lista da entidade atual com o termo de pesquisa como parâmetro de consulta
    this.router.navigate([`/${this.thisPage}-list`], {
      queryParams: { q: value },
    });
  }

  onInputChange(value: string) {
    // Navega para a página de lista da entidade atual se o valor do campo de pesquisa estiver vazio
    if (value.trim() === '') {
      this.router.navigate([`/${this.thisPage}-list`]);
    }
  }
}
