import { inject, Injectable } from '@angular/core';
import { BASE_API_URL, UserService } from '@bierrallye/shared/data-access';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Team } from '../../model/team.model';

@Injectable({
  providedIn: 'root',
})
export class TimeTrackingApiService {
  readonly #endpoint = BASE_API_URL + '/track';

  #http = inject(HttpClient);
  #userService = inject(UserService);

  checkIn(url: string): Observable<Team> {
    console.log(window.location.origin);
    if (url !== window.location.origin + this.#endpoint) {
      return throwError(() => 'QR-Code nicht gültig!');
    }
    return this.#http.post<Team>(
      this.#endpoint + '/checkIn',
      this.#userService.user()?.uuid
    );
  }

  checkOut(uuid?: string): Observable<Team> {
    return this.#http.post<Team>(this.#endpoint + 'checkOut', uuid);
  }

  validatedCheckOut(url: string): Observable<Team> {
    if (url !== window.location.origin + this.#endpoint) {
      return throwError(() => 'QR-Code nicht gültig!');
    }
    return this.checkOut(this.#userService.user()?.uuid);
  }

  team(uuid: string): Observable<Team> {
    return this.#http.get<Team>(BASE_API_URL + `/team/${uuid}`);
  }
}
