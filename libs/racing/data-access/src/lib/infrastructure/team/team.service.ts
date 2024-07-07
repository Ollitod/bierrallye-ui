import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from '../../model/team.model';
import { Observable } from 'rxjs';
import { API_URL } from '@bierrallye/shared/data-access';
import { CreateTeam } from '../../model/create-team.model';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  readonly #apiUrl = inject(API_URL);

  #http = inject(HttpClient);

  create(team: CreateTeam): Observable<string> {
    return this.#http.post(this.#apiUrl + 'completion/team', team, {
      responseType: 'text',
    });
  }

  get(uuid: string): Observable<Team> {
    return this.#http.get<Team>(`${this.#apiUrl}track/team/${uuid}`);
  }
}
