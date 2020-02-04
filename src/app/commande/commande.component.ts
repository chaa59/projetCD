import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PanierService } from '../panier.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  shippingCosts;
  items;
  checkoutForm;
  price: number;
  resultat = 0;
  total;
  i: any;
  constructor(private panierService: PanierService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.items = this.panierService.getItems();
    this.checkoutForm = this.formBuilder.group({
      name: '',
      adress: ''
    });
    for (this.i = 0; this.i < this.items.length; this.i++) {
      this.resultat = this.resultat + this.items[this.i][2];

    }
    console.log(this.resultat);

    console.log(this.items[0]);

    this.shippingCosts = this.panierService.getShippingPrices();

  }

  totaux1() {
    this.total = this.resultat;
  }

  totaux2() {
    this.total = this.resultat + 5.99;
  }

  totaux3() {
    this.total = this.resultat + 2.99;
  }






}
