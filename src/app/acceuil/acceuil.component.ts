import { Component, OnInit } from '@angular/core';
import { AuthentService } from '../services/authent.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  constructor( private auth: AuthentService,private router: Router) { }

  ngOnInit() {
  }
}
