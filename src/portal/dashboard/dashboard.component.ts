import { Component, OnInit } from '@angular/core';
import { CovidSummary } from '../common/covid-summary.model';
import { CovidService } from '../service/covid.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  covidSummary!: CovidSummary;

  constructor(private covidService: CovidService) { }

  ngOnInit(): void {
    this.getCovidCaseSummary();
  }

  getCovidCaseSummary() {
    this.covidService.getCovidCaseSummary()
      .subscribe((data: CovidSummary) => this.covidSummary = data);
  }

}
