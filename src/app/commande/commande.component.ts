import { vacances } from '../vacances';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PanierService } from '../panier.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  shippingCosts;
  constructor(private panierService: PanierService ) { }

  ngOnInit() {
    this.shippingCosts = this.panierService.getShippingPrices();

  }



}
