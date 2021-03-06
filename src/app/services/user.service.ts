import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private endpoint = 'http://127.0.0.1:8000/api/users';
  private endpoint1 = 'http://127.0.0.1:8000/api/listuserpresta';
  private endpoint2 = 'http://127.0.0.1:8000/api/bloquer';
private endpoint3 = 'http://127.0.0.1:8000/api/debloquer';
  constructor(private httpClient: HttpClient) {}
  ajoutUser(formData) {
    const formData1: FormData = new FormData();
    formData1.append('username', formData.username);
    formData1.append('password', formData.password);
    formData1.append('imageFile', formData.imageFile);
    formData1.append('nom', formData.nom);
    formData1.append('prenom', formData.prenom);
    formData1.append('adresse', formData.adresse);
    formData1.append('email', formData.email);
    formData1.append('contact', formData.contact);
    formData1.append('cni', formData.cni);
    console.log(formData);
    return this.httpClient.post<any>(this.endpoint, formData1, {observe: 'response'});
    }

    getUserlist() {
      return this.httpClient.get<any>(this.endpoint1);
    }
    bloquerUserlist(myuser: string) {
      return this.httpClient.post<any>(this.endpoint2, { username : myuser }, {observe: 'response'});
    }
    debloquerUserlist(myuser: string) {
      return this.httpClient.post<any>(this.endpoint3, { username : myuser }, {observe: 'response'});
    }
}
