import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CompteService {

  private host = 'http://127.0.0.1:8000/api/compte';
  private host1 = 'http://127.0.0.1:8000/api/mycount';
  private host2 = 'http://127.0.0.1:8000/api/listcompte';
  private host3 = 'http://127.0.0.1:8000/api/comptetravail';
  constructor(private httpClient: HttpClient) {}
  compte(formData) {
    const formData1: FormData = new FormData();
    formData1.append('matricule', formData.matricule);
    console.log(formData);
    return this.httpClient.post<any>(this.host, formData1, {observe: 'response'});
    }
    comptetravail(formData) {
      const formData1: FormData = new FormData();
      formData1.append('username', formData.username);
      formData1.append('numero', formData.numero);
      console.log(formData);
      return this.httpClient.post<any>(this.host3, formData1, {observe: 'response'});
      }
    getComptelist() {
      return this.httpClient.get<any>(this.host1);
    }
    getCompteliste() {
      return this.httpClient.get<any>(this.host2);
    }
}
