import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evaluation } from '../../model/evaluation.model';
import { environment } from '@bierrallye/shared/data-access';
import { Winners } from '../../model/winners.model';

@Injectable({
  providedIn: 'root',
})
export class EvaluationApiService {
  readonly #ENDPOINT = environment.apiUrl + '/evaluation';
  #http = inject(HttpClient);

  getEvaluations(): Observable<Evaluation[]> {
    return this.#http.get<Evaluation[]>(this.#ENDPOINT);
  }

  getWinners(): Observable<Winners> {
    return this.#http.get<Winners>(this.#ENDPOINT + '/winners');
  }
}
