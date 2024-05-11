import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStation } from '../../model/station.model';
import { ITeam } from '../../model/team.model';
import { IPenalty } from '../../model/penalty.model';
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

  getTeams(): Observable<ITeam[]> {
    return this.#http.get<ITeam[]>(this.#apiUrl + 'penalty/teams');
  }

  createPenalty(penalty: IPenalty): Observable<string> {
    return this.#http.post(this.#apiUrl + 'penalty', penalty, {
      responseType: 'text',
    });
  }
}
