import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { take } from 'rxjs';
import { TrpcClient } from 'src/trpc-client';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <router-outlet />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private _trpc = inject(TrpcClient);

  constructor() {
    this._trpc.categories.getTree.query().pipe(take(1)).subscribe(console.log);
  }
}
