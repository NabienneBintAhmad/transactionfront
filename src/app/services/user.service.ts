import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private endpoint = 'http://127.0.0.1:8000/api/users';
  constructor(private httpClient: HttpClient) {}
  ajoutCaissier(formData) {
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
    formData1.append('matriculeEntreprise', formData.matriculeEntreprise);
    console.log(formData);
    return this.httpClient.post<any>(this.endpoint, formData1, {observe: 'response'});
    }
}
