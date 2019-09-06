import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthentService {
private host = 'http://localhost:8000/api/login_check';

jwt = '';
username = '';
roles = [''];
statut = '';
compteTravail;
id;
exp;
  constructor(private http: HttpClient, private router: Router) { }


  login(loginUserData) {
    return this.http.post<any>(this.host, loginUserData, {observe: 'response'});
  }
  loggedIn() {
    return !!localStorage.getItem('token');
  }
  getToken() {
    return localStorage.getItem('token');
  }

  saveToken(jwt: any) {
    localStorage.setItem('token', jwt['token']);
    this.jwt = jwt['token'];
   
    this.parseJWT();
    console.log(this.parseJWT());
  }
  parseJWT() {
    const jwtHelper = new JwtHelperService();
    const objJWT = jwtHelper.decodeToken(this.jwt);
    this.username = objJWT.username;
    this.roles = objJWT.roles;
    this.statut = objJWT.statut;
    this.id = objJWT.id;
    this.exp = objJWT.exp;
    this.compteTravail = objJWT.compteTravail;
    console.log(this.username);
    console.log(this.roles);
    console.log(this.statut);
    console.log(this.compteTravail);
    console.log(this.id);
    console.log(this.exp);
  }
   isSuperadmin() {
     return this.roles.indexOf('ROLE_SUPERADMIN') >= 0;
   }
   isAdmin() {
    return this.roles.indexOf('ROLE_ADMIN') >= 0;
  }
  isUser() {
    return this.roles.indexOf('ROLE_USER') >= 0;
  }
  isCaissier() {
    return this.roles.indexOf('ROLE_CAISSIER') >= 0;
  }
  isAuthenticated() {
    return this.roles && (this.isAdmin || this.isCaissier || this.isSuperadmin || this.isUser);
  }
  logout() {
    localStorage.removeItem('token');
    this.jwt = undefined;
    this.username = undefined;
    this.jwt = undefined;
 }
  loadToken() {
    this.jwt = localStorage.getItem('token');
    this.parseJWT();
  }
}
