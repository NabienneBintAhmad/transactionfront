import { Component, OnInit } from '@angular/core';
import { CompteService } from '../services/compte.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allcompte',
  templateUrl: './allcompte.component.html',
  styleUrls: ['./allcompte.component.css']
})
export class AllcompteComponent implements OnInit {

  Comptelist: any = [];
  constructor(private compteService: CompteService, private router: Router) { }

  ngOnInit() {
    this.loadComptes();
  }

  loadComptes() {

  return this.compteService.getCompteliste().subscribe((data) => {
      this.Comptelist = data;
      console.log(data);
    },
     err => console.log(err)
    );
  }

}
