import { Component } from '@angular/core';
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
  constructor(private router: Router) {}

  onSearch(value: string) {
    if (value && value.length > 3) {
      this.router.navigate([
        '/character-list',
        {
          queryParams: { q: value },
        },
      ]);
    }
  }
}
