import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL, UserService } from '@bierrallye/shared/data-access';
import { Observable, throwError } from 'rxjs';
import { ITeam } from '../../model/team.model';

@Injectable({
  providedIn: 'root',
})
export class CheckOutService {
  readonly #endpoint = inject(API_URL) + 'track/checkOut';

  #http = inject(HttpClient);
  #userService = inject(UserService);

  checkOut(uuid?: string): Observable<ITeam> {
    return this.#http.post<ITeam>(this.#endpoint, uuid);
  }

  validatedCheckOut(url: string): Observable<ITeam> {
    if (url !== this.#endpoint) {
      return throwError(() => 'QR-Code nicht gültig!');
    }
    return this.checkOut(this.#userService.user.value?.uuid);
  }
}
