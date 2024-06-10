import { computed, inject, Injectable, signal } from '@angular/core';
import { IStation } from '../../model/station.model';
import { ITeam } from '../../model/team.model';
import { PenaltyService } from '../../infrastructure/penalty/penalty.service';
import { map } from 'rxjs';
import { CreatePenalty, IPenalty } from '../../model/penalty.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class PenaltyStoreService {
  private penaltyService = inject(PenaltyService);
  private toastr = inject(ToastrService);

  readonly stations = signal<IStation[]>([]);
  private readonly teams = signal<ITeam[]>([]);
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
  readonly recordedPenalties = signal<IPenalty[]>([]);
  readonly showCreatePenalty = signal<boolean>(false);

  loadStations() {
    this.penaltyService
      .getStations()
      .subscribe((stations) => this.stations.set(stations));
  }

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

  createPenalty(penalty: CreatePenalty) {
    this.penaltyService.createPenalty(penalty).subscribe({
      next: (p) => {
        this.recordedPenalties.set([...this.recordedPenalties(), p]);
        this.toastr.success(
          'Penalty wurde erfolgreich erfasst!',
          'Erfolgreich'
        );
      },
      error: (error) => {
        this.toastr.error(error.error, 'Fehler');
      },
    });
  }

  deletePenalty(stationId: number, penaltyId: number) {
    this.penaltyService.delete(penaltyId).subscribe({
      next: (response) => {
        this.toastr.success(response, 'Erfolgreich');
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
}
