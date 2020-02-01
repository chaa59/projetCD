import { FormBuilder } from '@angular/forms';
import { OnInit, Component } from '@angular/core';
import { PanierService } from '../panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  items;
  checkoutForm;

  constructor(
    private panierService: PanierService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.items = this.panierService.getItems();
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }
  onSubmit(customerData) {
    console.warn('Your order has been submitted', customerData);
    this.items = this.panierService.clearCart();
    this.checkoutForm.reset();
  }
}
