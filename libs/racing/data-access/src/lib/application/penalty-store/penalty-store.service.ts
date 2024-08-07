import { computed, inject, Injectable, signal } from '@angular/core';
import { Station } from '../../model/station.model';
import { Team } from '../../model/team.model';
import { PenaltyService } from '../../infrastructure/penalty/penalty.service';
import { lastValueFrom, map } from 'rxjs';
import { CreatePenalty, Penalty } from '../../model/penalty.model';
import { ToastrService } from 'ngx-toastr';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class PenaltyStoreService {
  private penaltyService = inject(PenaltyService);
  private toastr = inject(ToastrService);

  readonly stations = toSignal(this.penaltyService.getStations(), {
    initialValue: [],
  });
  private readonly teams = signal<Team[]>([]);
  readonly filteredTeams = computed(() => {
    return this.teams().filter(
      (team) =>
        !this.recordedPenalties().some(
          (penalty) => penalty.teamBoxId === team.boxId
        )
    );
  });
  readonly boxIds = computed(() =>
    this.filteredTeams()
      .map((team) => team.boxId)
      .sort((a, b) => a - b)
  );
  readonly recordedPenalties = signal<Penalty[]>([]);

  loadTeams(stationId: number) {
    this.penaltyService
      .getTeams(stationId)
      .pipe(
        map((teams) =>
          teams.sort((a, b) =>
            a.registration.participant1.fullName.localeCompare(
              b.registration.participant2.fullName
            )
          )
        )
      )
      .subscribe((teams) => this.teams.set(teams));
  }

  loadPenalties(stationId: number) {
    this.penaltyService
      .getPenalties(stationId)
      .subscribe((penalties) => this.recordedPenalties.set(penalties));
  }

  createPenalty(penalty: CreatePenalty, effectLabel: string) {
    this.penaltyService.createPenalty(penalty).subscribe({
      next: (p) => {
        this.recordedPenalties.set([...this.recordedPenalties(), p]);
        this.toastr.success(
          `Die ${effectLabel} wurden erfolgreich erfasst!`,
          'Erfolgreich'
        );
      },
      error: (error) => {
        this.toastr.error(error.error, 'Fehler');
      },
    });
  }

  deletePenalty(stationId: number, penaltyId: number, effectLabel: string) {
    this.penaltyService.delete(penaltyId).subscribe({
      next: () => {
        this.toastr.success(
          `Die ${effectLabel} wurden erfolgreich gelöscht!`,
          'Erfolgreich'
        );
        this.recordedPenalties.update((penalties) =>
          penalties.filter((p) => p.id !== penaltyId)
        );
        this.loadTeams(stationId);
      },
      error: (error) => {
        this.toastr.error(error.error, 'Fehler');
      },
    });
  }

  async hasPrivileges(stationId: number) {
    return await lastValueFrom(this.penaltyService.hasPrivileges(stationId));
  }
}
