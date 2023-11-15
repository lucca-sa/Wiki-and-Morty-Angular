import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  ParamMap,
  Router,
} from '@angular/router';

import { filter, take } from 'rxjs';
import { Location } from 'src/app/shared/Interfaces/location.interface';
import { LocationService } from 'src/app/shared/services/location.service';

type RequestInfo = {
  next: string | null;
};

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss'],
})
export class LocationListComponent {
  locations: Location[] = [];

  info: RequestInfo = {
    next: null,
  };
  showGoUpButton = false;
  thisPage = 'location';
  private pageNum = 1;
  private query!: string;
  private hideScrollHeight = 200;
  private showScrollHeight = 500;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private locationService: LocationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      this.query = params.get('q') || '';
      this.onUrlChange();
      this.getDataFromService();
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const yOffSet = window.scrollY;
    if (
      (yOffSet ||
        this.document.documentElement.scrollTop ||
        this.document.body.scrollTop) > this.showScrollHeight
    ) {
      this.showGoUpButton = true;
    } else if (
      this.showGoUpButton &&
      (yOffSet ||
        this.document.documentElement.scrollTop ||
        this.document.body.scrollTop) < this.hideScrollHeight
    ) {
      this.showGoUpButton = false;
    }
  }

  onScrollDown() {
    if (this.info.next) {
      this.pageNum++;
      this.getDataFromService();
    }
  }

  onScrollUp(): void {
    this.document.body.scrollTop = 0; // Safari
    this.document.documentElement.scrollTop = 0; // Outros navegadores
  }

  private onUrlChange(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.locations = [];
        this.pageNum = 1;
        this.getDataFromService();
      });
  }

  private getDataFromService(): void {
    this.locationService
      .searchLocations(this.query, this.pageNum)
      .pipe(take(1))
      .subscribe((res: any) => {
        const { info, results } = res;
        if (this.pageNum === 1) {
          this.locations = [];
        }
        this.locations = [...this.locations, ...results];
        this.info = info;
      });
  }

  onGoBack(): void {
    this.router.navigate(['/home']);
  }
}
