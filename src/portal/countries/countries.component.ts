import { Component, OnInit } from '@angular/core';
import { CovidCountryWise } from '../common/covid-country-wise.model';
import { CovidService } from '../service/covid.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  covidCountryWiseCases: CovidCountryWise[] = [];

  constructor(private covidService: CovidService) { }

  ngOnInit(): void {
    this.getCountryWiseCovidCase();
  }

  getCountryWiseCovidCase() {
    this.covidService.getCountryWiseCovidCase()
      .subscribe((data: CovidCountryWise[]) => this.covidCountryWiseCases = data);
  }

}
