import { inject, Injectable } from '@angular/core';
import { environment } from '@bierrallye/shared/data-access';
import { HttpClient } from '@angular/common/http';
import { RaceStats } from '../../model/race-stats.model';

@Injectable({
  providedIn: 'root',
})
export class RaceStatsApiService {
  readonly #ENDPOINT = environment.apiUrl + '/racestats';
  private http = inject(HttpClient);

  getRaceStats() {
    return this.http.get<RaceStats>(this.#ENDPOINT);
  }
}
