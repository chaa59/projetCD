import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataList: any[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  deconnection() {
    this.router.navigate(['/projet/connexion']);
  }
  retour() {
    this.router.navigate(['/']);

  }
}
