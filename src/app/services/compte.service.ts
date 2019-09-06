import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CompteService {

  private host = 'http://127.0.0.1:8000/api/compte';
  constructor(private httpClient: HttpClient) {}
  compte(formData) {
    const formData1: FormData = new FormData();
    formData1.append('matricule', formData.matricule);
    console.log(formData);
    return this.httpClient.post<any>(this.host, formData1, {observe: 'response'});
    }
}
