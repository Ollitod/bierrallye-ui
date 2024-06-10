import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStation } from '../../model/station.model';
import { ITeam } from '../../model/team.model';
import { CreatePenalty, IPenalty } from '../../model/penalty.model';
import { API_URL } from '@bierrallye/shared/data-access';

@Injectable({
  providedIn: 'root',
})
export class PenaltyService {
  readonly #apiUrl = inject(API_URL);

  #http = inject(HttpClient);

  getStations(): Observable<IStation[]> {
    return this.#http.get<IStation[]>(this.#apiUrl + 'penalty/stations');
  }

  getTeams(stationId: number): Observable<ITeam[]> {
    return this.#http.get<ITeam[]>(
      this.#apiUrl + 'penalty/teams/station/' + stationId
    );
  }

  createPenalty(penalty: CreatePenalty): Observable<IPenalty> {
    return this.#http.post<IPenalty>(this.#apiUrl + 'penalty', penalty);
  }

  getPenalties(stationId: number): Observable<IPenalty[]> {
    return this.#http.get<IPenalty[]>(
      this.#apiUrl + 'penalty/list/' + stationId
    );
  }

  delete(id: number) {
    return this.#http.delete(this.#apiUrl + 'penalty/' + id, {
      responseType: 'text',
    });
  }
}
