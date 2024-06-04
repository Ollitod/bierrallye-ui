import { inject, Injectable } from '@angular/core';
import { API_URL } from '@bierrallye/shared/data-access';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TeamOnboarding } from '../../model/team-onboarding.model';

@Injectable({
  providedIn: 'root',
})
export class OnboardingService {
  readonly #apiUrl = inject(API_URL);

  #http = inject(HttpClient);

  getRegistrations(): Observable<TeamOnboarding[]> {
    return this.#http.get<TeamOnboarding[]>(
      this.#apiUrl + 'completion/registrations'
    );
  }
}
