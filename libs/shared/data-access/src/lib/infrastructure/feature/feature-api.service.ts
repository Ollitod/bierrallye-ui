import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feature } from '../../model/feature.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FeatureApiService {
  readonly #ENDPOINT = environment.apiUrl + '/feature';
  #http = inject(HttpClient);

  getActive() {
    return this.#http.get<Feature>(this.#ENDPOINT + '/active');
  }
}
