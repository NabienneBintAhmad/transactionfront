import { Component, OnInit } from '@angular/core';
import { DepotService } from '../services/depot.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-depothistorique',
  templateUrl: './depothistorique.component.html',
  styleUrls: ['./depothistorique.component.css']
})
export class DepothistoriqueComponent implements OnInit {

  Depotlist: any = [];
  constructor(private compteService: DepotService, private router: Router) { }

  ngOnInit() {
    this.loaddepots();
  }

  loaddepots() {

  return this.compteService.getDepotlist().subscribe((data) => {
      this.Depotlist = data;
      console.log(data);
    },
     err => console.log(err)
    );
  }


}
