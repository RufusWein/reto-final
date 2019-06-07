import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ofert } from './ofert';

@Injectable({
  providedIn: 'root'
})
export class OfertService {

  constructor(private httpClient: HttpClient) { }

  getOfert() {
    return this.httpClient.get<Ofert[]>('')
  }
}
