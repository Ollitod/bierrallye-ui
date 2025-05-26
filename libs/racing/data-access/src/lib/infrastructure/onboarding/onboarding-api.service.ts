import { inject, Injectable } from '@angular/core';
import { BASE_API_URL } from '@bierrallye/shared/data-access';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TeamOnboarding } from '../../model/team-onboarding.model';
import { CreateTeam } from '../../model/create-team.model';

@Injectable({
  providedIn: 'root',
})
export class OnboardingApiService {
  readonly #ENDPOINT = BASE_API_URL + '/completion';
  #http = inject(HttpClient);

  registrations(): Observable<TeamOnboarding[]> {
    return this.#http.get<TeamOnboarding[]>(this.#ENDPOINT + '/registrations');
  }

  createTeam(team: CreateTeam): Observable<string> {
    return this.#http.post(this.#ENDPOINT + '/team', team, {
      responseType: 'text',
    });
  }
}
