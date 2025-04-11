import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AccountComponent } from './account/account.component';
import { CategoriesComponent } from './categories/categories.component';
import { HeaderDarkModeComponent } from './header-dark-mode.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CategoriesComponent,
    ShoppingCartComponent,
    HeaderDarkModeComponent,
    AccountComponent,
  ],
  template: `
    <app-categories />
    <app-shopping-cart />
    <app-dark-mode />
    <app-account />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
