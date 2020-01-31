import { vacances } from '../vacances';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vacances-select',
  templateUrl: './vacances-select.component.html',
  styleUrls: ['./vacances-select.component.css']
})
export class VacancesSelectComponent implements OnInit {
  vacances;

  constructor(private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.vacances = vacances[+params.get('vacancesId')];
    });

  }


}
