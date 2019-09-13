import { Component, OnInit } from '@angular/core';
import { CompteService } from '../services/compte.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comptelist',
  templateUrl: './comptelist.component.html',
  styleUrls: ['./comptelist.component.css']
})
export class ComptelistComponent implements OnInit {

  Comptelist: any = [];
  constructor(private compteService: CompteService, private router: Router) { }

  ngOnInit() {
    this.loadComptes();
  }

  loadComptes() {

  return this.compteService.getComptelist().subscribe((data) => {
      this.Comptelist = data;
      console.log(data);
    },
     err => console.log(err)
    );
  }

}
