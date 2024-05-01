import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStartblockWrapper } from '../../model/startblock-wrapper.model';
import { BASE_API_URL } from '@bierrallye/shared/data-access';

@Injectable({
  providedIn: 'root',
})
export class StartblockService {
  constructor(private http: HttpClient) {}

  getStartblocks(): Observable<IStartblockWrapper> {
    return this.http.get<IStartblockWrapper>(
      BASE_API_URL + 'registration/blocks'
    );
  }
}
