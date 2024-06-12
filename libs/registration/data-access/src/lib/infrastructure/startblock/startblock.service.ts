import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StartblockWrapper } from '../../model/startblock-wrapper.model';
import { API_URL } from '@bierrallye/shared/data-access';

@Injectable({
  providedIn: 'root',
})
export class StartblockService {
  readonly #apiUrl = inject(API_URL);

  #http = inject(HttpClient);

  getStartblocks(): Observable<StartblockWrapper> {
    return this.#http.get<StartblockWrapper>(
      this.#apiUrl + 'registration/blocks'
    );
  }
}
