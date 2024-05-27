import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '@bierrallye/shared/data-access';

@Injectable({
  providedIn: 'root',
})
export class VerificationService {
  readonly #apiUrl = inject(API_URL);

  #http = inject(HttpClient);

  verify(token: string): Observable<string> {
    return this.#http.get(`${this.#apiUrl}registration/verify?token=${token}`, {
      responseType: 'text',
    });
  }
}
