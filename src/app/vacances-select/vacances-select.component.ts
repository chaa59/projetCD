import { vacances } from '../vacances';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PanierService } from '../panier.service';

@Component({
  selector: 'app-vacances-select',
  templateUrl: './vacances-select.component.html',
  styleUrls: ['./vacances-select.component.css']
})
export class VacancesSelectComponent implements OnInit {
  vacances;

  constructor(private route: ActivatedRoute, private panierService: PanierService ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.vacances = vacances[+params.get('vacancesId')];
    });

  }

  // tslint:disable-next-line:no-shadowed-variable
  addToCart(vacances) {
    window.alert('Ajouter dans le panier !');
    this.panierService.addToCart(vacances.destination);
  }


}
