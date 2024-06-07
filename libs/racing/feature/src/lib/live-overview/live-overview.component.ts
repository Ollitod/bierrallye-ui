import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LiveOverviewStoreService,
  RaceStats,
} from '@bierrallye/racing/data-access';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { TeamCardComponent } from '@bierrallye/racing/ui';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'bierrallye-racing-feature-live-overview',
  standalone: true,
  imports: [
    CommonModule,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    TeamCardComponent,
  ],
  templateUrl: './live-overview.component.html',
  styleUrl: './live-overview.component.scss',
})
export class LiveOverviewComponent {
  stats: RaceStats = {};

  private liveOverviewStore = inject(LiveOverviewStoreService);

  constructor() {
    this.liveOverviewStore.refreshingRaceStats$
      .pipe(takeUntilDestroyed())
      .subscribe((stats) => {
        this.stats = stats;
      });
  }
}
