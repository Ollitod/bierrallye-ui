import { inject, Injectable, signal } from '@angular/core';
import { User } from '../../model/user.model';
import { HttpClient } from '@angular/common/http';
import { TokenService } from '../../application/token/token.service';
import { Router } from '@angular/router';
import { API_URL } from '../../injection-token';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly #apiUrl = inject(API_URL);

  #http = inject(HttpClient);
  #tokenService = inject(TokenService);
  #router = inject(Router);

  readonly user = signal<User | undefined>(undefined);

  public loginUser(): void {
    this.#http
      .get<User>(this.#apiUrl + 'user')
      .subscribe((user) => this.user.set(user));
  }

  public logout(): void {
    this.invalidateUser();
    void this.#router.navigate(['/login']);
  }

  invalidateUser() {
    this.user.set(undefined);
    this.#tokenService.removeToken();
  }
}
