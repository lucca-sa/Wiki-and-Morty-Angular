import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  template: `
    <input
      type="text"
      #searchInput
      autofocus
      class="form-control-lg"
      placeholder="Search..."
      (keyup)="onSearch(searchInput.value)"
    />
  `,
  styles: ['input {width:100%;}'],
})
export class SearchFormComponent {
  @Input() thisPage!: string;
  constructor(private router: Router) {}

  onSearch(value: string) {
    this.router.navigate([`/${this.thisPage}-list`], {
      queryParams: { q: value },
    });
  }
}
