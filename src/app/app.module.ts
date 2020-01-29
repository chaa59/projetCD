import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { VacancesListComponent } from './vacances-list/vacances-list.component';
import { VacancesDetailsComponent } from './vacances-details/vacances-details.component';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { PageConnexionComponent } from './PageConnexion/page-connexion.component';
import { InscriptionComponent } from './PageConnexion/inscription/inscription.component';
import { HomeComponent } from './PageConnexion/home/home.component';
import { ErreurComponent } from './PageConnexion/erreur/erreur.component';

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
    VacancesDetailsComponent,
    CartComponent,
    PageConnexionComponent,
    InscriptionComponent,
    HomeComponent,
    ErreurComponent
  ],
  bootstrap: [AppComponent],
  providers: [CartService]
})
export class AppModule { }

