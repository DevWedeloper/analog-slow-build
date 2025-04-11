import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AccountComponent } from './account/account.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AccountComponent],
  template: `
    <app-account />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
