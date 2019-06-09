import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ofert } from './ofert';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfertService {
  private header = new HttpHeaders();
    
  constructor(private httpClient: HttpClient) { }
  
  onInit(){
    this.header.append('Content-Type', 'application/json');
    this.header.append('Accept', 'application/json');  }

  getOferta(id: number) {
    return this.httpClient.get<Ofert>('http://localhost:9966/petclinic/api/offers/'+id);
  }

  getOfertas() {
    return this.httpClient.get<Ofert[]>('http://localhost:9966/petclinic/api/offers/');
  }

  getOfertasValidas() {
    return this.httpClient.get<Ofert[]>('http://localhost:9966/petclinic/api/offers/valid');
  }

  deleteOferta(id: any): Observable<any> {
    const headers =this.header;
    console.log('http://localhost:9966/petclinic/api/offers/delete/'+id);
    return this.httpClient.delete('http://localhost:9966/petclinic/api/offers/delete/'+id, { headers });
  }

  addOfert(oferta : Ofert): Observable<Ofert>{
    const headers =this.header;
    oferta.id=null;
    return this.httpClient.post<Ofert>('http://localhost:9966/petclinic/api/offers/add', oferta, { headers });
  }

  actualizaOferta(oferta: Ofert) {
    const headers =this.header;
    return this.httpClient.put<Ofert>('http://localhost:9966/petclinic/api/offers/update', oferta, { headers });

  }
}
