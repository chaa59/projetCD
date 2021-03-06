import { CommandeComponent } from './commande/commande.component';
import { MotDePasseComponent } from './PageConnexion/motDePasse/motDePasse.component';
import { ErreurComponent } from './PageConnexion/erreur/erreur.component';
import { HomeComponent } from './PageConnexion/home/home.component';
import { ConnexionComponent } from './PageConnexion/connexion/connexion.component';
import { InscriptionComponent } from './PageConnexion/inscription/inscription.component';
import { PageConnexionComponent } from './PageConnexion/page-connexion.component';
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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    BrowserModule,
    FilterPipeModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: VacancesListComponent },
      { path: 'vacances/:vacancesId', component: VacancesSelectComponent },
      { path: 'vacances2/:vacancesId', component: VacancesSelect2Component },
      { path: 'panier', component: PanierComponent },
      { path: 'commande', component: CommandeComponent },

      {
        path: 'projet', component: PageConnexionComponent, children: [
          { path: 'inscription', component: InscriptionComponent },
          { path: 'connexion', component: ConnexionComponent },
          { path: 'home', component: HomeComponent },
          { path: 'erreur', component: ErreurComponent },
          { path: 'mdp', component: MotDePasseComponent },



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
    VacancesSelectComponent,
    InscriptionComponent,
    ConnexionComponent,
    VacancesSelect2Component,
    MotDePasseComponent,
    CommandeComponent
  ],

  bootstrap: [AppComponent],
  providers: [PanierService]

})
export class AppModule { }

