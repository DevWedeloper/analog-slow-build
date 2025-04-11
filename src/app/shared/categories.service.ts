import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import {
  delay,
  filter,
  map,
  materialize,
  merge,
  of,
  share,
  shareReplay,
} from 'rxjs';
import { errorStream, initialLoading, successStream } from './utils/rxjs';
import { showError } from './utils/toast';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private PLATFORM_ID = inject(PLATFORM_ID);

  private categories$ = of([]).pipe(delay(300), materialize(), share());

  private categoriesSuccess$ = this.categories$.pipe(
    successStream(),
    shareReplay({ bufferSize: 1, refCount: true }),
  );

  private categoriesError$ = this.categories$.pipe(errorStream(), share());

  private status$ = merge(
    this.categoriesSuccess$.pipe(map(() => 'success' as const)),
    this.categoriesError$.pipe(map(() => 'error' as const)),
  );

  private initialLoading$ = this.status$.pipe(initialLoading());

  categories = toSignal(this.categoriesSuccess$, {
    initialValue: [],
  });

  isInitialLoading = toSignal(this.initialLoading$, {
    initialValue: true,
  });

  hasError = toSignal(this.categoriesError$.pipe(map(() => true)), {
    initialValue: false,
  });

  constructor() {
    this.categoriesError$
      .pipe(
        filter(() => isPlatformBrowser(this.PLATFORM_ID)),
        takeUntilDestroyed(),
      )
      .subscribe((error) => showError(error.message));
  }
}
