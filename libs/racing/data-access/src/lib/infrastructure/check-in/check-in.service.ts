import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL, UserService } from '@bierrallye/shared/data-access';
import { ITeam } from '../../model/team.model';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckInService {
  readonly #endpoint: string = inject(API_URL) + 'track/checkIn';

  #http = inject(HttpClient);
  #userService = inject(UserService);

  checkIn(url: string): Observable<ITeam> {
    if (url !== this.#endpoint) {
      return throwError(() => 'QR-Code nicht gültig!');
    }
    return this.#http.post<ITeam>(
      this.#endpoint,
      this.#userService.user.value?.uuid
    );
  }
}
