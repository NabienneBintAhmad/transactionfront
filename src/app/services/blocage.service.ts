import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BlocageService {

private endpoint = 'http://127.0.0.1:8000/api/listusersystem';
private endpoint2 = 'http://127.0.0.1:8000/api/bloquer';
private endpoint3 = 'http://127.0.0.1:8000/api/debloquer';
private endpoint4 = 'http://127.0.0.1:8000/api/blockuser';
  constructor(private httpClient: HttpClient) {}

  getUserlist() {
    return this.httpClient.get<any>(this.endpoint);
  }
  getUserPresta() {
    return this.httpClient.get<any>(this.endpoint4);
  }
  bloquerUserlist(myuser: string) {
    return this.httpClient.post<any>(this.endpoint2, { username : myuser }, {observe: 'response'});
  }
  debloquerUserlist(myuser: string) {
    return this.httpClient.post<any>(this.endpoint3, { username : myuser }, {observe: 'response'});
  }
}
