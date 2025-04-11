import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CategoriesComponent } from './categories/categories.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CategoriesComponent],
  template: `
    <app-categories />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
