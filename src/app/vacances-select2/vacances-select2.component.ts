import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PanierService } from '../panier.service';
import { vacances2 } from '../vacances';

@Component({
  selector: 'app-vacances-select2',
  templateUrl: './vacances-select2.component.html',
  styleUrls: ['./vacances-select2.component.css']
})
export class VacancesSelect2Component implements OnInit {
  vacances2;

  constructor(private route: ActivatedRoute, private panierService: PanierService ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.vacances2 = vacances2[+params.get('vacancesId')];
    });

  }

  // tslint:disable-next-line:no-shadowed-variable
  addToCart(vacances2) {
    window.alert('Your travel has been added to the cart!');
    this.panierService.addToCart(vacances2);
  }


}
