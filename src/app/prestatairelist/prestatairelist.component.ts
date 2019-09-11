import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';
@Component({
  selector: 'app-prestatairelist',
  templateUrl: './prestatairelist.component.html',
  styleUrls: ['./prestatairelist.component.css']
})
export class PrestatairelistComponent implements OnInit {
  Prestatairelist: any = [];
  constructor(private prestaService: RegisterService, private router: Router) { }

  ngOnInit() {
    this.loadPrestataire();
  }

  loadPrestataire() {
  return this.prestaService.getPrestalist().subscribe((data) => {
      this.Prestatairelist = data;
      console.log(data);
    },
     err => console.log(err)
    );
  }
}
