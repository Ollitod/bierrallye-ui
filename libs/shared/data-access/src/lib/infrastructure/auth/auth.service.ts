import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAuth } from '../../model/auth.model';
import { BASE_API_URL } from '../configuration';
import { Token } from '../../model/token.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  authenticate(auth: IAuth): Observable<Token> {
    return this.http.post<Token>(BASE_API_URL + 'authenticate', auth);
  }
}
