import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthentService } from '../services/authent.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentGuard {
  constructor(private auth: AuthentService , private router: Router) { }
/* canActivate(): boolean {
  if (this.auth.loggedIn()) {
    return true;
  } else {
    this.router.navigate(['/login']);
    return false;
  }
}

} */
}
