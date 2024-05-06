import { inject, Injectable } from '@angular/core';
import { IDrink } from '../../model/drink.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '@bierrallye/shared/data-access';

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
