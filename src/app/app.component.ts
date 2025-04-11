import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { take } from 'rxjs';
import { TrpcClient } from 'src/trpc-client';

@Component({
  selector: 'app-root',
  standalone: true,
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private _trpc = inject(TrpcClient);

  constructor() {
    this._trpc.test.test.query().pipe(take(1)).subscribe(console.log);
  }
}
