import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  CreateRegistration,
  Drink,
  environment,
  Registration,
  Token,
  UpdateRegistration,
} from '@bierrallye/shared/data-access';
import { Observable } from 'rxjs';
import { StartblockWrapper } from '../../model/startblock-wrapper.model';

@Injectable({
  providedIn: 'root',
})
export class RegistrationApiService {
  readonly #ENDPOINT = environment.apiUrl + '/registration';
  #http = inject(HttpClient);

  register(team: CreateRegistration): Observable<unknown> {
    return this.#http.post(this.#ENDPOINT, team);
  }

  update(registration: UpdateRegistration) {
    return this.#http.put<Registration>(this.#ENDPOINT, registration);
  }

  deregister(token: Token): Observable<unknown> {
    return this.#http.get<boolean>(
      `${this.#ENDPOINT}/unsubscribe?token=${token.token}`
    );
  }

  verify(token: string): Observable<string> {
    return this.#http.get(`${this.#ENDPOINT}/verify?token=${token}`, {
      responseType: 'text',
    });
  }

  drinks(): Observable<Drink[]> {
    return this.#http.get<Drink[]>(`${this.#ENDPOINT}/drinks`);
  }

  startblocks(): Observable<StartblockWrapper> {
    return this.#http.get<StartblockWrapper>(`${this.#ENDPOINT}/blocks`);
  }
}
