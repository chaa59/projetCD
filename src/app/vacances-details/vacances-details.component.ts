import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { vacances } from "../vacances";
import { CartService } from "../cart.service";

@Component({
  selector: "app-vacances-details",
  templateUrl: "./vacances-details.component.html",
  styleUrls: ["./vacances-details.component.css"]
})
export class VacancesDetailsComponent implements OnInit {
  vacances;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.vacances = vacances[+params.get("vacancesId")];
    });
  }

  addToCart(vacances) {
    window.alert('Your travel has been added to the cart!');
    this.cartService.addToCart(vacances);
  }
}


