import { Component } from '@angular/core';
import { AuthentService } from '../app/services/authent.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'transactionfront';
  constructor(private authservice: AuthentService) {}

   ngOnInit(): void {
    this.authservice.loadToken();
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




