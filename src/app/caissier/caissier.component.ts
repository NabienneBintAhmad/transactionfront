import { Component, OnInit } from '@angular/core';
import { CaissierService } from '../services/caissier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-caissier',
  templateUrl: './caissier.component.html',
  styleUrls: ['./caissier.component.css'],
  providers: [CaissierService]
})
export class CaissierComponent implements OnInit {
  caissierUserData = { imageFile: File = null };
  imageUrl = 'assets/image/Capture d’écran de 2019-06-27 15-09-48.png';

  constructor(private caissierService: CaissierService, private router: Router) { }

  ngOnInit() {
  }
  handleFileInput(file: FileList) {
    this.caissierUserData.imageFile = file.item(0);
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.caissierUserData.imageFile);
  }
  ajoutCaissier() {
    this.caissierService.ajoutCaissier(this.caissierUserData)
      .subscribe(
        data => {
          console.log(data);

        }
      );
  }

}
