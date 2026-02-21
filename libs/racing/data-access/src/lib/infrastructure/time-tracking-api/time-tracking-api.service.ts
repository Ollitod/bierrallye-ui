import { inject, Injectable } from '@angular/core';
import { environment, UserService } from '@bierrallye/shared/data-access';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Team } from '../../model/team.model';

@Injectable({
  providedIn: 'root',
})
export class TimeTrackingApiService {
  readonly #ENDPOINT = environment.apiUrl + '/track';

  #http = inject(HttpClient);
  #userService = inject(UserService);

  checkIn(url: string): Observable<Team> {
    if (url !== this.#ENDPOINT + '/checkIn') {
      return throwError(() => 'QR-Code nicht gültig!');
    }
    return this.#http.post<Team>(
      this.#ENDPOINT + '/checkIn',
      this.#userService.user()?.uuid
    );
  }

  checkOut(uuid?: string): Observable<Team> {
    return this.#http.post<Team>(this.#ENDPOINT + '/checkOut', uuid);
  }

  validatedCheckOut(url: string): Observable<Team> {
    if (url !== this.#ENDPOINT + '/checkOut') {
      return throwError(() => 'QR-Code nicht gültig!');
    }
    return this.checkOut(this.#userService.user()?.uuid);
  }

  team(uuid: string): Observable<Team> {
    return this.#http.get<Team>(this.#ENDPOINT + `/team/${uuid}`);
  }
}
