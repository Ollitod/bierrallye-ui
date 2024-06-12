import { inject, Injectable } from '@angular/core';
import { API_URL, Drink } from '@bierrallye/shared/data-access';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DrinkService {
  readonly #apiUrl = inject(API_URL);

  #http = inject(HttpClient);

  getDrinks(): Observable<Drink[]> {
    return this.#http.get<Drink[]>(this.#apiUrl + 'registration/drinks');
  }
}
