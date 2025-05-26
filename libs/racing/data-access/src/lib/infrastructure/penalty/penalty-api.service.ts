import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Station } from '../../model/station.model';
import { Team } from '../../model/team.model';
import { CreatePenalty, Penalty } from '../../model/penalty.model';
import { BASE_API_URL } from '@bierrallye/shared/data-access';

@Injectable({
  providedIn: 'root',
})
export class PenaltyApiService {
  readonly #ENDPOINT = BASE_API_URL + '/penalty';
  #http = inject(HttpClient);

  getStations(): Observable<Station[]> {
    return this.#http.get<Station[]>(this.#ENDPOINT + '/stations');
  }

  getTeams(stationId: number): Observable<Team[]> {
    return this.#http.get<Team[]>(
      `${this.#ENDPOINT}/teams/station/${stationId}`
    );
  }

  createPenalty(penalty: CreatePenalty): Observable<Penalty> {
    return this.#http.post<Penalty>(this.#ENDPOINT, penalty);
  }

  getPenalties(stationId: number): Observable<Penalty[]> {
    return this.#http.get<Penalty[]>(`${this.#ENDPOINT}/list/${stationId}`);
  }

  delete(id: number) {
    return this.#http.delete(`${this.#ENDPOINT}/${id}`, {
      responseType: 'text',
    });
  }

  hasPrivileges(stationId: number) {
    return this.#http.get<boolean>(`/penalty/${stationId}/checkPrivileges`);
  }
}
