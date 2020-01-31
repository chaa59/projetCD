import { SharedService } from './../../service/SharedService';
import { vacances } from '../vacances';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-vacances-select',
  templateUrl: './vacances-select.component.html',
  styleUrls: ['./vacances-select.component.css']
})
export class VacancesSelectComponent implements OnInit {
  vacances;

  constructor(private route: ActivatedRoute, private cartService: CartService, private sharedService: SharedService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.vacances = vacances[+params.get('vacancesId')];
    });

  }

  addToCart(vacances) {
    window.alert('Your travel has been added to the cart!');
    this.cartService.addToCart(vacances);
  }

  dataname() {

    this.sharedService.data.push(this.dataname.name);
  }

}
