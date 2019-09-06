import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private endpoint = 'http://127.0.0.1:8000/api/retrait';
  private endpoint1 = 'http://127.0.0.1:8000/api/envoie';
  constructor(private httpClient: HttpClient) {}
  retrait(formData) {
    const formData1: FormData = new FormData();
    formData1.append('envoyeurNomComplet', formData.envoyeurNomComplet);
    formData1.append('recepteurNomComplet', formData.recepteurNomComplet);
    formData1.append('recepteurCni', formData.recepteurCni);
    formData1.append('code', formData.code);
    console.log(formData);
    return this.httpClient.post<any>(this.endpoint, formData1, {observe: 'response'});
    }

    envoie(formData) {
      const formData2: FormData = new FormData();
      formData2.append('montant', formData.montant);
      formData2.append('envoyeurNomComplet', formData.envoyeurNomComplet);
      formData2.append('recepteurNomComplet', formData.recepteurNomComplet);
      formData2.append('envoyeurCni', formData.recepteurCni);
      console.log(formData);
      return this.httpClient.post<any>(this.endpoint1, formData2, {observe: 'response'});
      }
}
