import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL, UserService } from '@bierrallye/shared/data-access';
import { Observable, throwError } from 'rxjs';
import { Team } from '../../model/team.model';

@Injectable({
  providedIn: 'root',
})
export class CheckOutService {
  readonly #endpoint = inject(API_URL) + 'track/checkOut';

  #http = inject(HttpClient);
  #userService = inject(UserService);

  checkOut(uuid?: string): Observable<Team> {
    return this.#http.post<Team>(this.#endpoint, uuid);
  }

  validatedCheckOut(url: string): Observable<Team> {
    if (url !== this.#endpoint) {
      return throwError(() => 'QR-Code nicht gültig!');
    }
    return this.checkOut(this.#userService.user()?.uuid);
  }
}
