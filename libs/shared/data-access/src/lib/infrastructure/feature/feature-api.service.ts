import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feature } from '../../model/feature.model';
import { BASE_API_URL } from '../../../index';

@Injectable({
  providedIn: 'root',
})
export class FeatureApiService {
  #http = inject(HttpClient);

  getActive() {
    return this.#http.get<Feature>(BASE_API_URL + '/feature/active');
  }
}
