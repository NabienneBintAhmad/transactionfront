import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.component.html',
  styleUrls: ['./retrait.component.css']
})
export class RetraitComponent implements OnInit {
  retraitData = {};
  constructor(private transactionService: TransactionService, private router: Router) { }
  ngOnInit() {
  }

  retrait() {
    this.transactionService.retrait(this.retraitData)
      .subscribe(
        data => {
          window.confirm('Retrait réussi!');
          console.log(data);
        },
        err => {
          window.confirm('Retrait échoué!');
          console.log(err);
        }
      );
  }
}



