import { vacances2, vacances3 } from './../vacances';
import { Component } from '@angular/core';

import { vacances } from '../vacances';
import { FilterPipe } from 'ngx-filter-pipe';

@Component({
  selector: 'app-vacances-list',
  templateUrl: './vacances-list.component.html',
  styleUrls: ['./vacances-list.component.css']

})
export class VacancesListComponent {
  vacances = vacances;
  vacances2 = vacances2;

  userFilter: any = { name: '' };

  constructor(private filterPipe: FilterPipe) {

  }

  disponibility() {
    window.alert('The vacances has been disponible!');
  }

  onNotify() {
    window.alert('You will be notified when the travel goes on sale');
  }
}

