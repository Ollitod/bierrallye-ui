import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateRegistration } from '../../model/registration.model';
import { Observable } from 'rxjs';
import { API_URL } from '../../injection-token';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  readonly #apiUrl = inject(API_URL);

  #http = inject(HttpClient);

  register(team: CreateRegistration): Observable<unknown> {
    return this.#http.post(this.#apiUrl + 'registration', team);
  }
}
