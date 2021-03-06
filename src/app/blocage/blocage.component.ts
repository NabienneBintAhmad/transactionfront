import { Component, OnInit } from '@angular/core';
import { BlocageService } from '../services/blocage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-blocage',
  templateUrl: './blocage.component.html',
  styleUrls: ['./blocage.component.css']
})
export class BlocageComponent implements OnInit {
  Userlist: any = [];
  constructor(private userService: BlocageService, private router: Router) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
  return this.userService.getUserPresta().subscribe((data) => {
      this.Userlist = data;
      console.log(data);
    },
     err => console.log(err)
    );
  }
  bloquerUserlist(username: string) {
    if (window.confirm('Vous etes sure de vouloir bloquer ce User ?')) {
      // console.log(username);
      this.userService.bloquerUserlist(username).subscribe(data => {
        this.loadUsers();
        console.log(data);
      });
    }
  }
  debloquerUserlist(username: string) {
    if (window.confirm('Vous etes sure de vouloir debloquer ce User ?')) {
      // console.log(username);
      this.userService.debloquerUserlist(username).subscribe(data => {
        this.loadUsers();
        console.log(data);
      });
    }
  }

}
