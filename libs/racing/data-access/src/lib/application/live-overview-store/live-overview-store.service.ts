import { inject, Injectable } from '@angular/core';
import { RaceStatsService } from '../../infrastructure/live-overview/race-stats.service';
import { switchMap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LiveOverviewStoreService {
  private raceStatsService = inject(RaceStatsService);

  refreshingRaceStats$ = timer(0, 10000).pipe(
    switchMap(() => this.raceStatsService.getRaceStats())
  );
}
