import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '@bierrallye/shared/data-access';

@Injectable({
  providedIn: 'root',
})
export class DeregisterService {
  constructor(private http: HttpClient) {}

  deregister(token: Token): Observable<unknown> {
    return this.http.get<boolean>(
      `https://bierrallye.meinhard.at/registration/unsubscribe?token=${token.token}`
    );
  }
}
