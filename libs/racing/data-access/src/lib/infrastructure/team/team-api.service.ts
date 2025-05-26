import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from '../../model/team.model';
import { Observable } from 'rxjs';
import { BASE_API_URL } from '@bierrallye/shared/data-access';
import { CreateTeam } from '../../model/create-team.model';

@Injectable({
  providedIn: 'root',
})
export class TeamApiService {
  #http = inject(HttpClient);

  create(team: CreateTeam): Observable<string> {
    return this.#http.post(BASE_API_URL + '/completion/team', team, {
      responseType: 'text',
    });
  }

  get(uuid: string): Observable<Team> {
    return this.#http.get<Team>(BASE_API_URL + `/track/team/${uuid}`);
  }
}
