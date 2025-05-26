import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auth } from '../../model/auth.model';
import { Token } from '../../model/token.model';
import { BASE_API_URL } from '../../../index';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  #http = inject(HttpClient);

  authenticate(auth: Auth): Observable<Token> {
    return this.#http.post<Token>(BASE_API_URL + '/authenticate', auth);
  }
}
