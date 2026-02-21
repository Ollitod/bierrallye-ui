import { computed, inject, Injectable } from '@angular/core';
import { FeatureApiService } from '../../infrastructure/feature/feature-api.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class FeatureStoreService {
  private featureService = inject(FeatureApiService);

  readonly activeFeature = toSignal(this.featureService.getActive());
  readonly isPreEvent = computed(
    () =>
      this.activeFeature() === 'REGISTRATION' ||
      this.activeFeature() === 'LIVE_TRACKING'
  );
  readonly isPostEvent = computed(() => this.activeFeature() === 'EVALUATION');
}
