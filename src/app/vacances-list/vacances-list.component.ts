import { vacances2 } from './../vacances';
import { Component } from '@angular/core';

import { vacances } from '../vacances';

@Component({
  selector: 'app-vacances-list',
  templateUrl: './vacances-list.component.html',
  styleUrls: ['./vacances-list.component.css']

})
export class VacancesListComponent {
  vacances = vacances;
  vacances2 = vacances2;

  disponibility() {
    window.alert('The vacances has been disponible!');
  }

  onNotify() {
    window.alert('You will be notified when the travel goes on sale');
  }
}

