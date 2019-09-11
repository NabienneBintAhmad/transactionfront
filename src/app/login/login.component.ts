import { Component, OnInit } from '@angular/core';
import { AuthentService } from '../services/authent.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginUserData = {};
  constructor(private authentService: AuthentService , private router: Router) { }

  ngOnInit(): void {
  }
   isSuperadmin() {
    return this.authentService.isSuperadmin();
  }
  isAdmin() {
    return this.authentService.isAdmin();
  }
  isUser() {
    return this.authentService.isUser();
  }
  isCaissier() {
    return this.authentService.isCaissier ();
  }
  isAuthenticated() {
    return this.authentService.isAuthenticated ();
  }
  logout() {
    return this.authentService.logout ();
  }
  loggedIn() {
    return this.authentService.loggedIn ();
  }
login() {
  this.authentService.login(this.loginUserData)
    .subscribe(
      resp => {
        window.confirm('Connexion réussie');
        console.log(resp);
        const jwt: any = resp.body;
        this.authentService.saveToken(jwt);
        this.router.navigateByUrl('/acceuil');
      },
      err => {
        console.log(err);
        window.confirm('Connexion échouée, rassayer');
      }
    );
}

}
