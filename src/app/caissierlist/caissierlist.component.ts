import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CaissierService } from '../services/caissier.service';

@Component({
  selector: 'app-caissierlist',
  templateUrl: './caissierlist.component.html',
  styleUrls: ['./caissierlist.component.css']
})
export class CaissierlistComponent implements OnInit {
Caissierlist: any = [];
  constructor(private caissierService: CaissierService, private router: Router) { }

  ngOnInit() {
    this.loadCaissiers();
  }

  loadCaissiers() {

  return this.caissierService.getCaissierlist().subscribe((data: Caissierlist []) => {
      this.Caissierlist = data;
      console.log(data);
    },
     err => console.log(err)
    );
  }
  bloquerCaissierlist() {
    if (window.confirm('Vous etes sure de vouloir bloquer ce caissier ?')) {
      this.caissierService.bloquerCaissierlist().subscribe(data => {
        this.loadCaissiers();
      });
    }
  }
}
