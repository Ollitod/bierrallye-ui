import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evaluation } from '../../model/evaluation.model';
import { BASE_API_URL } from '@bierrallye/shared/data-access';
import { Winners } from '../../model/winners.model';

@Injectable({
  providedIn: 'root',
})
export class EvaluationApiService {
  readonly #ENDPOINT = BASE_API_URL + '/evaluation';
  #http = inject(HttpClient);

  getEvaluations(): Observable<Evaluation[]> {
    return this.#http.get<Evaluation[]>(this.#ENDPOINT);
  }

  getWinners(): Observable<Winners> {
    return this.#http.get<Winners>(this.#ENDPOINT + '/winners');
  }
}
