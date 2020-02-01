import { SharedService } from './../service/SharedService';
import { ErreurComponent } from './PageConnexion/erreur/erreur.component';
import { VacancesDataComponent } from './vacances-data/vacances-data.component';
import { HomeComponent } from './PageConnexion/home/home.component';
import { ConnexionComponent } from './PageConnexion/connexion/connexion.component';
import { InscriptionComponent } from './PageConnexion/inscription/inscription.component';
import { PageConnexionComponent } from './PageConnexion/page-connexion.component';
import { ShippingComponent } from './shipping/shipping.component';
import { VacancesSelect2Component } from './vacances-select2/vacances-select2.component';
import { VacancesSelectComponent } from './vacances-select/vacances-select.component';
import { VacancesListComponent } from './vacances-list/vacances-list.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { PanierComponent } from './panier/panier.component';
import { PanierService } from './panier.service';

@NgModule({
  imports: [
    BrowserModule,
    FilterPipeModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FilterPipeModule,
    RouterModule.forRoot([
      { path: '', component: VacancesListComponent },
      { path: 'vacances/:vacancesId', component: VacancesSelectComponent },
      { path: 'vacances2/:vacancesId', component: VacancesSelect2Component },
      { path: 'panier', component: PanierComponent },
      { path: 'shipping', component: ShippingComponent },
      { path: 'vacancesdata', component: VacancesDataComponent },
      {
        path: 'projet', component: PageConnexionComponent, children: [
          { path: 'inscription', component: InscriptionComponent },
          { path: 'connexion', component: ConnexionComponent },
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
    PanierComponent,
    PageConnexionComponent,
    ConnexionComponent,
    HomeComponent,
    ErreurComponent,
    ShippingComponent,
    VacancesSelectComponent,
    InscriptionComponent,
    ConnexionComponent,
    VacancesDataComponent
  ],

  bootstrap: [AppComponent],
  providers: [PanierService, SharedService]

})
export class AppModule { }

