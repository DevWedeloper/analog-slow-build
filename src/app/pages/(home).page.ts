import { RouteMeta } from '@analogjs/router';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideList, lucideSearch } from '@ng-icons/lucide';
import { HlmCardDirective } from '@spartan-ng/ui-card-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { AppService } from '../shared/data-access/app.service';
import { FooterComponent } from '../shared/layout/footer/footer.component';
import { HeaderComponent } from '../shared/layout/header/header.component';
import { metaWith } from '../shared/utils/meta';

export const routeMeta: RouteMeta = {
  meta: metaWith(
    'Stripe Ecommerce',
    'A modern eCommerce platform powered by Stripe—buy and sell products with ease, enjoy a seamless checkout experience, and manage orders effortlessly.',
  ),
  title: 'Stripe Ecommerce',
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgIcon,
    HlmIconDirective,
    HlmCardDirective,
    HeaderComponent,
    FooterComponent,
  ],
  providers: [provideIcons({ lucideList, lucideSearch })],
  template: `

  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomePageComponent {
  private router = inject(Router);
  private appService = inject(AppService);

  constructor() {
    effect(() => {
      const clearUrl = this.appService.clearUrl();
      if (clearUrl) {
        this.router.navigate([], {
          queryParams: null,
          fragment: undefined,
        });
      }
    });
  }
}
