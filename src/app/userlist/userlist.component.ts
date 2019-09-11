import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  Userlist: any = [];
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
  return this.userService.getUserlist().subscribe((data) => {
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
