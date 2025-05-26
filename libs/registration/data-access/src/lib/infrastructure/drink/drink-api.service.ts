import { inject, Injectable } from '@angular/core';
import { BASE_API_URL, Drink } from '@bierrallye/shared/data-access';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DrinkApiService {
  #http = inject(HttpClient);

  getDrinks(): Observable<Drink[]> {
    return this.#http.get<Drink[]>(BASE_API_URL + '/registration/drinks');
  }
}
