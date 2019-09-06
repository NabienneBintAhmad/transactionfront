import { Component, OnInit } from '@angular/core';
import { CompteService } from '../services/compte.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  compteData = {};
  constructor(private transactionService: CompteService, private router: Router) { }
  ngOnInit() {
  }

  compte() {
    this.transactionService.compte(this.compteData)
      .subscribe(
        data => {
          console.log(data);
        }
      );
  }

}
