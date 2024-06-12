import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evaluation } from '../../model/evaluation.model';
import { API_URL } from '@bierrallye/shared/data-access';

@Injectable({
  providedIn: 'root',
})
export class EvaluationService {
  readonly #apiUrl = inject(API_URL);

  #http = inject(HttpClient);

  getEvaluations(): Observable<Evaluation[]> {
    return this.#http.get<Evaluation[]>(this.#apiUrl + 'evaluation');
  }
}
