import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAuth } from '../../model/auth.model';
import { Token } from '../../model/token.model';
import { API_URL } from '../../injection-token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly #apiUrl = inject(API_URL);

  #http = inject(HttpClient);

  authenticate(auth: IAuth): Observable<Token> {
    return this.#http.post<Token>(this.#apiUrl + 'authenticate', auth);
  }
}
