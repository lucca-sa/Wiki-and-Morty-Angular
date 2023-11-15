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
    this.router.navigate([`/${this.thisPage}-list`], {
      queryParams: { q: value },
    });
  }

  onInputChange(value: string) {
    if (value.trim() === '') {
      this.router.navigate([`/${this.thisPage}-list`]);
    }
  }
}
