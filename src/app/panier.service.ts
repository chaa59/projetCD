import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  items = [];

  constructor(
    private http: HttpClient
  ) {}

  addToCart(vacances) {
    this.items.push(vacances);
  }
  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  getShippingPrices() {
    return this.http.get('../assets/shipping.json');
  }

}
