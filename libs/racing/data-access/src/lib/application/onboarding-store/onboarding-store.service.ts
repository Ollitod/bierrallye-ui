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
    if (this.filterOnboarded()) {
      const registrations = this.registrations().filter(
        (registration) => !registration.hasTeam
      );
      return this.applyFilter(registrations);
    } else {
      return this.applyFilter(this.registrations());
    }
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

  private applyFilter(registrations: TeamOnboarding[]) {
    if (this.selectedFilter() === 'name') {
      return registrations.filter((reg) =>
        this.filterByName(reg, this.nameFilter())
      );
    } else if (this.selectedFilter() === 'boxId') {
      return registrations.filter((reg) => this.filterBoxId(reg));
    } else {
      return registrations;
    }
  }

  private filterByName(registration: TeamOnboarding, filter: string) {
    return (
      registration.participant1.fullName
        .toLowerCase()
        .includes(filter.toLowerCase()) ||
      registration.participant2.fullName
        .toLowerCase()
        .includes(filter.toLowerCase())
    );
  }

  private filterBoxId(reg: TeamOnboarding) {
    if (reg.boxId) {
      if (this.nameFilter() === '') {
        return reg;
      } else {
        return reg.boxId === parseInt(this.nameFilter());
      }
    } else {
      return null;
    }
  }
}
