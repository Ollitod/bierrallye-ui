import { computed, inject, Injectable } from '@angular/core';
import { FeatureService } from '../../infrastructure/feature/feature.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class FeatureStoreService {
  private featureService = inject(FeatureService);

  readonly activeFeature = toSignal(this.featureService.getActive());
  readonly isPreEvent = computed(
    () =>
      this.activeFeature() === 'REGISTRATION' ||
      this.activeFeature() === 'LIVE_TRACKING'
  );
  readonly isPostEvent = computed(() => this.activeFeature() === 'EVALUATION');
}
