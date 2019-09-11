import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userData = { imageFile: File = null };
  imageUrl = 'assets/image/100-percent-halal.png';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }
  handleFileInput(file: FileList) {
    this.userData.imageFile = file.item(0);
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.userData.imageFile);
  }
  ajoutUser() {
    this.userService.ajoutUser(this.userData)
      .subscribe(
        data => {
          console.log(data);

        }
      );
  }

}
