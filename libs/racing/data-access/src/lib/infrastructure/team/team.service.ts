import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITeam } from '../../model/team.model';
import { Observable } from 'rxjs';
import { API_URL } from '@bierrallye/shared/data-access';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  readonly #apiUrl = inject(API_URL);

  #http = inject(HttpClient);

  create(team: ITeam): Observable<string> {
    return this.#http.post(this.#apiUrl + 'completion/team', team, {
      responseType: 'text',
    });
  }

  get(uuid?: string): Observable<ITeam> {
    return this.#http.get<ITeam>(`${this.#apiUrl}track/team/${uuid}`);
  }
}
