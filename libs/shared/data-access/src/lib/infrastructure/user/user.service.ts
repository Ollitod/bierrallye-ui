import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../../model/user.model';
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

  user: BehaviorSubject<IUser | undefined> = new BehaviorSubject<
    IUser | undefined
  >(undefined);

  public loginUser(): void {
    this.#http
      .get<IUser>(this.#apiUrl + 'user')
      .subscribe((user) => this.user.next(user));
  }

  public logout(): void {
    this.invalidateUser();
    void this.#router.navigate(['/login']);
  }

  invalidateUser() {
    this.user.next(undefined);
    this.#tokenService.removeToken();
  }
}
