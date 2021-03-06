import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {
  registrUserData = { imageFile: File = null };
  imageUrl = 'assets/image/100-percent-halal.png';

  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit() {
  }
  handleFileInput(file: FileList) {
    this.registrUserData.imageFile = file.item(0);
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.registrUserData.imageFile);
  }
  registerUser() {
    this.registerService.registerUser(this.registrUserData)
      .subscribe(
        data => {
          window.confirm('Inséré!');
          console.log(data);

        },
        err => {
          window.confirm('Pas inséré!');
          console.log(err);

        }
      );
  }
}
