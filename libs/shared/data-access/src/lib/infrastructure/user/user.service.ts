import { inject, Injectable, signal } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { User } from '../../model/user.model';
import { HttpClient } from '@angular/common/http';
import { TokenService } from '../../application/token/token.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly #ENDPOINT = environment.apiUrl + '/user';
  #http = inject(HttpClient);
  #tokenService = inject(TokenService);
  #router = inject(Router);

  readonly user = signal<User | undefined>(undefined);

  public loginUser(): void {
    this.#http
      .get<User>(this.#ENDPOINT)
      .subscribe((user) => this.user.set(user));
  }

  async fetchUser() {
    return lastValueFrom(this.#http.get<User>(this.#ENDPOINT));
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
