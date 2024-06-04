import { computed, inject, Injectable, signal } from '@angular/core';
import { OnboardingService } from '../../infrastructure/onboarding/onboarding.service';
import { TeamOnboarding } from '../../model/team-onboarding.model';

@Injectable({
  providedIn: 'root',
})
export class OnboardingStoreService {
  private onboardingService = inject(OnboardingService);

  private readonly registrations = signal<TeamOnboarding[]>([]);
  readonly filterOnboarded = signal(false);
  readonly filteredRegistrations = computed(() => {
    return this.filterOnboarded()
      ? this.registrations().filter((registration) => !registration.hasTeam)
      : this.registrations();
  });

  loadRegistrations() {
    this.onboardingService.getRegistrations().subscribe((registrations) => {
      this.registrations.set(registrations);
    });
  }

  setHasTeam(uuid: string) {
    this.registrations.update((registrations) =>
      registrations.map((registration) =>
        registration.uuid === uuid
          ? { ...registration, hasTeam: true }
          : registration
      )
    );
  }

  toggleFilterOnboarded() {
    this.filterOnboarded.set(!this.filterOnboarded());
  }
}
