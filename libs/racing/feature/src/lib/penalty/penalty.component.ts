import { Component } from '@angular/core';
import { PenaltyStoreService } from '@bierrallye/racing/data-access';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'bierrallye-racing-feature-penalty',
  standalone: true,
  imports: [MatListModule, MatCardModule, RouterOutlet],
  templateUrl: './penalty.component.html',
  styleUrls: ['./penalty.component.scss'],
})
export class PenaltyComponent {
  stations = this.penaltyStoreService.stations;
  showCreatePenalty = this.penaltyStoreService.showCreatePenalty;

  constructor(
    private penaltyStoreService: PenaltyStoreService,
    private router: Router
  ) {
    this.penaltyStoreService.loadStations();
  }

  navigateCreatePenalty(stationId: number) {
    this.router.navigate(['racing/penalty/', stationId]);
  }
}
