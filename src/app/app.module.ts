import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { VacancesListComponent } from './vacances-list/vacances-list.component';
import { VacancesAlertsComponent } from './vacances-alerts/vacances-alerts.component';
import { VacancesDetailsComponent } from './vacances-details/vacances-details.component';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { FilterPipeModule } from 'ngx-filter-pipe';

@NgModule({
  imports: [
    BrowserModule,
    FilterPipeModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: VacancesListComponent },
      { path: 'vacances/:vacancesId', component: VacancesDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    VacancesListComponent,
    VacancesAlertsComponent,
    VacancesDetailsComponent,
    CartComponent,
    ShippingComponent
  ],
  bootstrap: [AppComponent],
  providers: [CartService]
})
export class AppModule { }

