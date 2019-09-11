import { Component, OnInit } from '@angular/core';
import { AuthentService } from '../app/services/authent.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  title = 'transactionfront';
  constructor(private authservice: AuthentService, private router: Router) {}
  ngOnInit(): void {
    this.router.navigateByUrl('/login');
  }
  isSuperadmin() {
    return this.authservice.isSuperadmin();
  }
  isAdmin() {
    return this.authservice.isAdmin();
  }
  isUser() {
    return this.authservice.isUser();
  }
  isCaissier() {
    return this.authservice.isCaissier();
  }
  isAuthenticated() {
    return this.authservice.isAuthenticated();
  }
  logout() {
    return this.authservice.logout();
  }
  loggedIn() {
    return this.authservice.loggedIn();
  }
}




