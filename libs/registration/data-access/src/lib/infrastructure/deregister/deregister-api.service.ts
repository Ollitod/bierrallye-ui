import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_API_URL, Token } from '@bierrallye/shared/data-access';

@Injectable({
  providedIn: 'root',
})
export class DeregisterApiService {
  #http = inject(HttpClient);

  deregister(token: Token): Observable<unknown> {
    return this.#http.get<boolean>(
      BASE_API_URL + `/registration/unsubscribe?token=${token.token}`
    );
  }
}
