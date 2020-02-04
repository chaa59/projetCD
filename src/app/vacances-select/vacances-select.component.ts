import { vacances, vacances2 } from './../vacances';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PanierService } from '../panier.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { element } from 'protractor';
import { stringify } from 'querystring';

@Component({
  selector: 'app-vacances-select',
  templateUrl: './vacances-select.component.html',
  styleUrls: ['./vacances-select.component.css']
})
export class VacancesSelectComponent implements OnInit {
  vacances;


  // tslint:disable-next-line:no-shadowed-variable
  addToCart(vacances) {
    window.alert('Ajouter dans le panier !');
    this.panierService.addToCart(vacances.destination);
  }
  constructor(private route: ActivatedRoute, private panierService: PanierService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.vacances = vacances[+params.get('vacancesId')];
    });

  }

}
