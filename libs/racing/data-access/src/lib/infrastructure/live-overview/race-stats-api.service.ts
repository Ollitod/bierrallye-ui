import { inject, Injectable } from '@angular/core';
import { BASE_API_URL } from '@bierrallye/shared/data-access';
import { HttpClient } from '@angular/common/http';
import { RaceStats } from '../../model/race-stats.model';

@Injectable({
  providedIn: 'root',
})
export class RaceStatsApiService {
  private http = inject(HttpClient);

  getRaceStats() {
    return this.http.get<RaceStats>(BASE_API_URL + '/racestats');
  }
}
