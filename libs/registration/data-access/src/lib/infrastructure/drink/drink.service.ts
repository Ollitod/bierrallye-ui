import { Injectable } from '@angular/core';
import { IDrink } from '../../model/drink.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BASE_API_URL } from '@bierrallye/shared/data-access';

@Injectable({
  providedIn: 'root',
})
export class DrinkService {
  constructor(private http: HttpClient) {}

  getDrinks(): Observable<IDrink[]> {
    return this.http.get<IDrink[]>(BASE_API_URL + 'registration/drinks');
  }
}
