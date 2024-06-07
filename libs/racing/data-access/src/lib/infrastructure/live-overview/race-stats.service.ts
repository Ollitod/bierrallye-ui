import { inject, Injectable } from '@angular/core';
import { API_URL } from '@bierrallye/shared/data-access';
import { HttpClient } from '@angular/common/http';
import { RaceStats } from '../../model/race-stats.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RaceStatsService {
  readonly #apiUrl = inject(API_URL);

  private http = inject(HttpClient);

  getRaceStats() {
    return this.http.get<RaceStats>(`${this.#apiUrl}/race-stats`);
  }

  getMockRaceStats() {
    return of({
      started: [...Array(Math.floor(Math.random() * 20) + 1).keys()],
      station1: [...Array(Math.floor(Math.random() * 20) + 1).keys()],
      station2: [...Array(Math.floor(Math.random() * 20) + 1).keys()],
      station3: [...Array(Math.floor(Math.random() * 20) + 1).keys()],
      station4: [...Array(Math.floor(Math.random() * 20) + 1).keys()],
      station5: [...Array(Math.floor(Math.random() * 20) + 1).keys()],
      station6: [...Array(Math.floor(Math.random() * 20) + 1).keys()],
      station7: [...Array(Math.floor(Math.random() * 20) + 1).keys()],
      station8: [...Array(Math.floor(Math.random() * 20) + 1).keys()],
      finished: [...Array(Math.floor(Math.random() * 20) + 1).keys()],
    } as RaceStats);
  }
}
