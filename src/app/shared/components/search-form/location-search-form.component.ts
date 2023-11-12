import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-search-form',
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
export class LocationSearchFormComponent {
  constructor(private router: Router) {}

  onSearch(value: string) {
    this.router.navigate(['/location-list'], {
      queryParams: { q: value },
    });
  }
}
