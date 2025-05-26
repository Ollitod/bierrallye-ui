import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_API_URL, UserService } from '@bierrallye/shared/data-access';
import { Observable, throwError } from 'rxjs';
import { Team } from '../../model/team.model';

@Injectable({
  providedIn: 'root',
})
export class CheckOutApiService {
  readonly #endpoint = BASE_API_URL + '/track/checkOut';

  #http = inject(HttpClient);
  #userService = inject(UserService);

  checkOut(uuid?: string): Observable<Team> {
    return this.#http.post<Team>(this.#endpoint, uuid);
  }

  validatedCheckOut(url: string): Observable<Team> {
    if (url !== window.location.origin + this.#endpoint) {
      return throwError(() => 'QR-Code nicht gültig!');
    }
    return this.checkOut(this.#userService.user()?.uuid);
  }
}
