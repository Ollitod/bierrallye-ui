import { inject, Injectable } from '@angular/core';
import { API_URL, IDrink } from '@bierrallye/shared/data-access';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DrinkService {
  readonly #apiUrl = inject(API_URL);

  #http = inject(HttpClient);

  getDrinks(): Observable<IDrink[]> {
    return this.#http.get<IDrink[]>(this.#apiUrl + 'registration/drinks');
  }
}
