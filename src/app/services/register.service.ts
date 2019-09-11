import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private endpoint = 'http://127.0.0.1:8000/api/register';
  private endpoint1 = 'http://127.0.0.1:8000/api/listpresta';
  constructor(private httpClient: HttpClient) {}
  registerUser(formData) {
    const formData1: FormData = new FormData();
    formData1.append('username', formData.username);
    formData1.append('password', formData.password);
    formData1.append('imageFile', formData.imageFile);
    formData1.append('nom', formData.nom);
    formData1.append('prenom', formData.prenom);
    formData1.append('adresse', formData.adresse);
    formData1.append('email', formData.imail);
    formData1.append('contact', formData.contact);
    formData1.append('cni', formData.cni);
    formData1.append('nom', formData.nom);
    formData1.append('prenom', formData.prenom);
    formData1.append('nomEntreprise', formData.nomEntreprise);
    formData1.append('adresse', formData.adresse);
    formData1.append('contact', formData.contact);
    formData1.append('cni', formData.cni);
    formData1.append('email', formData.email);
    console.log(formData);
    return this.httpClient.post<any>(this.endpoint, formData1, {observe: 'response'});
    }
    getPrestalist() {
      return this.httpClient.get<any>(this.endpoint1);
    }
}
