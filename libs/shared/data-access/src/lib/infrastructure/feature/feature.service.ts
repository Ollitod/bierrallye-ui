import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feature } from '../../model/feature.model';
import { API_URL } from '../../injection-token';

@Injectable({
  providedIn: 'root',
})
export class FeatureService {
  readonly #apiUrl = inject(API_URL);

  #http = inject(HttpClient);

  getActive() {
    return this.#http.get<Feature>(`${this.#apiUrl}feature/active`);
  }
}
