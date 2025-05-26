import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StartblockWrapper } from '../../model/startblock-wrapper.model';
import { BASE_API_URL } from '@bierrallye/shared/data-access';

@Injectable({
  providedIn: 'root',
})
export class StartblockApiService {
  #http = inject(HttpClient);

  getStartblocks(): Observable<StartblockWrapper> {
    return this.#http.get<StartblockWrapper>(
      BASE_API_URL + '/registration/blocks'
    );
  }
}
