import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Station } from '../../model/station.model';
import { Team } from '../../model/team.model';
import { CreatePenalty, Penalty } from '../../model/penalty.model';
import { API_URL } from '@bierrallye/shared/data-access';

@Injectable({
  providedIn: 'root',
})
export class PenaltyService {
  readonly #apiUrl = inject(API_URL);

  #http = inject(HttpClient);

  getStations(): Observable<Station[]> {
    return this.#http.get<Station[]>(this.#apiUrl + 'penalty/stations');
  }

  getTeams(stationId: number): Observable<Team[]> {
    return this.#http.get<Team[]>(
      this.#apiUrl + 'penalty/teams/station/' + stationId
    );
  }

  createPenalty(penalty: CreatePenalty): Observable<Penalty> {
    return this.#http.post<Penalty>(this.#apiUrl + 'penalty', penalty);
  }

  getPenalties(stationId: number): Observable<Penalty[]> {
    return this.#http.get<Penalty[]>(
      this.#apiUrl + 'penalty/list/' + stationId
    );
  }

  delete(id: number) {
    return this.#http.delete(this.#apiUrl + 'penalty/' + id, {
      responseType: 'text',
    });
  }

  hasPrivileges(stationId: number) {
    return this.#http.get<boolean>(
      `${this.#apiUrl}penalty/${stationId}/checkPrivileges`
    );
  }
}
