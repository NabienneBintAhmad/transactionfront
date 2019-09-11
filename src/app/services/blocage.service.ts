import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'

})
export class BlocageService {

private endpoint = 'http://127.0.0.1:8000/api/listusersystem';
private endpoint2 = 'http://127.0.0.1:8000/api/bloquer';
username;
  constructor(private httpClient: HttpClient) {}

  getUserlist() {
    return this.httpClient.get<any>(this.endpoint);
  }
  bloquerUserlist(username) {
    return this.httpClient.post<any>(this.endpoint2, username, {observe: 'response'});
  }
}
