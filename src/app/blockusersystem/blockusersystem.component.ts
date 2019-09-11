import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlocageService } from '../services/blocage.service';
@Component({
  selector: 'app-blockusersystem',
  templateUrl: './blockusersystem.component.html',
  styleUrls: ['./blockusersystem.component.css']
})
export class BlockusersystemComponent implements OnInit {
 Userlist: any = [];
  constructor(private userService: BlocageService, private router: Router) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {

  return this.userService.getUserlist().subscribe((data:Userlist []) => {
      this.Userlist = data;
      console.log(data);
    },
     err => console.log(err)
    );
  }
  bloquerUserlist(username) {
    if (window.confirm('Vous etes sure de vouloir bloquer ce User ?')) {
      this.userService.bloquerUserlist(username).subscribe(data => {
        this.loadUsers();
        console.log(data);
      });
    }
  }

}
