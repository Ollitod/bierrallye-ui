import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatActionList, MatListItem } from '@angular/material/list';
import { MatCard, MatCardContent } from '@angular/material/card';
import { PenaltyStoreService } from '@bierrallye/racing/data-access';
import { Router } from '@angular/router';

@Component({
  selector: 'bierrallye-racing-feature-station-list',
  standalone: true,
  imports: [CommonModule, MatActionList, MatCard, MatCardContent, MatListItem],
  templateUrl: './station-list.component.html',
  styleUrl: './station-list.component.scss',
})
export class StationListComponent {
  private penaltyStoreService = inject(PenaltyStoreService);
  private router = inject(Router);

  stations = this.penaltyStoreService.stations;

  navigateCreatePenalty(stationId: number) {
    void this.router.navigate(['racing/penalty/', stationId]);
  }
}
