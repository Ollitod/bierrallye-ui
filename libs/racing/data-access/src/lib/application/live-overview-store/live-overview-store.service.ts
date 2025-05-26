import { inject, Injectable } from '@angular/core';
import { RaceStatsApiService } from '../../infrastructure/live-overview/race-stats-api.service';
import { switchMap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LiveOverviewStoreService {
  private raceStatsService = inject(RaceStatsApiService);

  refreshingRaceStats$ = timer(0, 10000).pipe(
    switchMap(() => this.raceStatsService.getRaceStats())
  );
}
