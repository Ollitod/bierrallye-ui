import { computed, inject, Injectable, model, signal } from '@angular/core';
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
    return this.registrations()
      .filter((registration) => this.applyFilterOnboarded(registration))
      .filter((registration) => this.applyFilterBy(registration));
  });

  nameFilter = signal('');
  selectedFilter = model<string>('name');

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

  private applyFilterOnboarded(registration: TeamOnboarding) {
    return this.filterOnboarded() ? !registration.hasTeam : true;
  }

  private applyFilterBy(registration: TeamOnboarding) {
    if (this.selectedFilter() === 'name') {
      return this.filterByName(registration);
    } else if (this.selectedFilter() === 'boxId') {
      return this.filterByBoxId(registration);
    } else {
      return true;
    }
  }

  private filterByName(registration: TeamOnboarding) {
    return (
      registration.participant1.fullName
        .toLowerCase()
        .includes(this.nameFilter().toLowerCase()) ||
      registration.participant2.fullName
        .toLowerCase()
        .includes(this.nameFilter().toLowerCase())
    );
  }

  private filterByBoxId(registration: TeamOnboarding) {
    if (registration.boxId) {
      if (this.nameFilter() === '') {
        return true;
      } else {
        return registration.boxId === parseInt(this.nameFilter());
      }
    } else {
      return false;
    }
  }
}
