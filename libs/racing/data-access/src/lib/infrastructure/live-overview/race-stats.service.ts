import { inject, Injectable } from '@angular/core';
import { API_URL } from '@bierrallye/shared/data-access';
import { HttpClient } from '@angular/common/http';
import { RaceStats } from '../../model/race-stats.model';

@Injectable({
  providedIn: 'root',
})
export class RaceStatsService {
  readonly #apiUrl = inject(API_URL);

  private http = inject(HttpClient);

  getRaceStats() {
    return this.http.get<RaceStats>(`${this.#apiUrl}racestats`);
  }
}
