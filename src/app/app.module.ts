import { InscriptionComponent } from './PageConnexion/inscription/inscription.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { VacancesListComponent } from './vacances-list/vacances-list.component';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { PageConnexionComponent } from './PageConnexion/page-connexion.component';
import { HomeComponent } from './PageConnexion/home/home.component';
import { ErreurComponent } from './PageConnexion/erreur/erreur.component';
import { ShippingComponent } from './shipping/shipping.component';
import { VacancesSelectComponent } from './vacances-select/vacances-select.component';
import { ConnexionComponent } from './PageConnexion/connexion/connexion.component';

@NgModule({
  imports: [
    BrowserModule,
    FilterPipeModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: VacancesListComponent },
      { path: 'vacances/:vacancesId', component: VacancesSelectComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
      {
        path: 'projet', component: PageConnexionComponent, children: [
          { path: 'inscription', component: InscriptionComponent },
          { path: 'home', component: HomeComponent },
          { path: 'erreur', component: ErreurComponent },

        ]
      }


    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    VacancesListComponent,
    CartComponent,
    PageConnexionComponent,
    ConnexionComponent,
    HomeComponent,
    ErreurComponent,
    ShippingComponent,
    VacancesSelectComponent,
  ],
  bootstrap: [AppComponent],
  providers: [CartService]
})
export class AppModule { }

