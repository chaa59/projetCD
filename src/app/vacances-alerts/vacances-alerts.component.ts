import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-vacances-alerts",
  templateUrl: "./vacances-alerts.component.html",
  styleUrls: ["./vacances-alerts.component.css"]
})
export class VacancesAlertsComponent implements OnInit {
  @Input() vacances;
  @Output() notify = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
