import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auth } from '../../model/auth.model';
import { Token } from '../../model/token.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  readonly #ENDPOINT = environment.apiUrl + '/authenticate';
  #http = inject(HttpClient);

  authenticate(auth: Auth): Observable<Token> {
    return this.#http.post<Token>(this.#ENDPOINT, auth);
  }
}
