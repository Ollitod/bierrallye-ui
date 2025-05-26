import { inject, Injectable, signal } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { User } from '../../model/user.model';
import { HttpClient } from '@angular/common/http';
import { TokenService } from '../../application/token/token.service';
import { Router } from '@angular/router';
import { BASE_API_URL } from '../../../index';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  #http = inject(HttpClient);
  #tokenService = inject(TokenService);
  #router = inject(Router);

  readonly user = signal<User | undefined>(undefined);

  public loginUser(): void {
    this.#http
      .get<User>(BASE_API_URL + '/user')
      .subscribe((user) => this.user.set(user));
  }

  async fetchUser() {
    return lastValueFrom(this.#http.get<User>(BASE_API_URL + '/user'));
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
