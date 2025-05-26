import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_API_URL, UserService } from '@bierrallye/shared/data-access';
import { Team } from '../../model/team.model';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckInApiService {
  readonly #endpoint = BASE_API_URL + '/track/checkIn';

  #http = inject(HttpClient);
  #userService = inject(UserService);

  checkIn(url: string): Observable<Team> {
    console.log(window.location.origin);
    if (url !== window.location.origin + this.#endpoint) {
      return throwError(() => 'QR-Code nicht gültig!');
    }
    return this.#http.post<Team>(
      this.#endpoint,
      this.#userService.user()?.uuid
    );
  }
}
