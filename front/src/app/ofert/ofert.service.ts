import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ofert } from './ofert';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfertService {
  
  constructor(private httpClient: HttpClient) { }
  
  getOfert() {
    return this.httpClient.get<Ofert[]>('')
  }
  addOfert(oferts : Ofert): Observable<any>{
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return this.httpClient.post<Ofert>('', oferts, {headers});
  }
}
