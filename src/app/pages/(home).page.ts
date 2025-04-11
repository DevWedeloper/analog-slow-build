import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '../shared/layout/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  template: `
    <app-header />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomePageComponent {}
