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
  name: string;
  destination: any;
  destination1: string;
  price: any;
  price1: number;


  constructor(private route: ActivatedRoute, private panierService: PanierService ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.vacances2 = vacances2[+params.get('vacancesId')];
    });


  }

  addToCart(pays, name, price, datedepart, datearrivee) {
    window.alert('Ajouter dans le panier !');
    var voyage = [pays, name, price, datedepart, datearrivee];
    this.panierService.addToCart(voyage);
  }



}
