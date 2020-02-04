import { Component, OnInit } from '@angular/core';
import { PanierService } from '../panier.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts;

  constructor( private panierService: PanierService) { }

  ngOnInit() {    this.shippingCosts = this.panierService.getShippingPrices();

  }

}
