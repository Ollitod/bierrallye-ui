import { inject, Injectable } from '@angular/core';
import { BASE_API_URL } from '@bierrallye/shared/data-access';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TeamOnboarding } from '../../model/team-onboarding.model';

@Injectable({
  providedIn: 'root',
})
export class OnboardingApiService {
  #http = inject(HttpClient);

  getRegistrations(): Observable<TeamOnboarding[]> {
    return this.#http.get<TeamOnboarding[]>(
      BASE_API_URL + '/completion/registrations'
    );
  }
}
