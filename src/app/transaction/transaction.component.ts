import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  envoieData = {};
  constructor(private transactionService: TransactionService, private router: Router) { }
  ngOnInit() {
  }

  envoie() {
    this.transactionService.envoie(this.envoieData)
      .subscribe(
        data => {
          console.log(data);
    }
      );
  }

}



