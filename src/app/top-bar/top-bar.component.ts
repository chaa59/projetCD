import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {


  constructor(private router: Router) { }


  ngOnInit() {
  }

  connexion() {
    this.router.navigate(['/projet/inscription']);


  }

}

