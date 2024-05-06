import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL, Token } from '@bierrallye/shared/data-access';

@Injectable({
  providedIn: 'root',
})
export class DeregisterService {
  readonly #apiUrl = inject(API_URL);

  #http = inject(HttpClient);

  deregister(token: Token): Observable<unknown> {
    return this.#http.get<boolean>(
      `${this.#apiUrl}registration/unsubscribe?token=${token.token}`
    );
  }
}
