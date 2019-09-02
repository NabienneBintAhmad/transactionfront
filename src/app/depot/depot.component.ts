import { Component, OnInit } from '@angular/core';
import { DepotService } from '../services/depot.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.css']
})
export class DepotComponent implements OnInit {

  depotData = {};
  constructor(private depotService: DepotService , private router: Router) { }


  ngOnInit() {
  }
  depot() {
    this.depotService.depot(this.depotData)
      .subscribe(
        resp => {
          console.log(resp);

        },
        err => console.log(err)
      );
  }
}
