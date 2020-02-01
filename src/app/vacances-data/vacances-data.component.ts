import { SharedService } from './../../service/SharedService';
import { vacances2 } from '../vacances';
import { Component, OnInit } from '@angular/core';

import { vacances } from '../vacances';
import { FilterPipe } from 'ngx-filter-pipe';

@Component({
  selector: 'app-vacances-data',
  templateUrl: './vacances-data.component.html',
  styleUrls: ['./vacances-data.component.css']

})
export class VacancesDataComponent implements OnInit {
  vacances = vacances;
  vacances2 = vacances2;

  namedata: any;
  vacancesdataFilter: any;


  constructor(private filterPipe: FilterPipe, private sharedService: SharedService) {
    console.log(filterPipe.transform(this.vacances, { name: 'M' }));
  }

  ngOnInit() {
    // this.namedata = this.sharedService.data;
    // if (this.namedata === 'granada') {
    //   this.vacancesdataFilter = { name: 'granada' };
    // }
  }

  disponibility() {
    window.alert('The vacances has been disponible!');
  }

  onNotify() {
    window.alert('You will be notified when the travel goes on sale');
  }
}

