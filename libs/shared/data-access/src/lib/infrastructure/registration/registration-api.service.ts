import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateRegistration } from '../../model/registration.model';
import { Observable } from 'rxjs';
import { BASE_API_URL } from '../../../index';

@Injectable({
  providedIn: 'root',
})
export class RegistrationApiService {
  #http = inject(HttpClient);

  register(team: CreateRegistration): Observable<unknown> {
    return this.#http.post(BASE_API_URL + '/registration', team);
  }
}
