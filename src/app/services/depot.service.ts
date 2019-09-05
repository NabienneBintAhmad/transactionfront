import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DepotService {

  private endpoint = 'http://127.0.0.1:8000/api/depot';
  constructor(private httpClient: HttpClient) {}
  depot(formData) {
    const formData1: FormData = new FormData();
    formData1.append('numero', formData.numero);
    formData1.append('montant', formData.montant);
    console.log(formData);
    return this.httpClient.post<any>(this.endpoint, formData1, {observe: 'response'});
    }
}
