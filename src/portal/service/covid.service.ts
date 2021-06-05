import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { covidSummaryUrl, covidCountryWiseUrl } from '../common/urls';
import { CovidSummary } from '../common/covid-summary.model';
import { CovidCountryWise } from '../common/covid-country-wise.model';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) { }

  getCovidCaseSummary() {
    return this.http.get<CovidSummary>(covidSummaryUrl);
  }
  getCountryWiseCovidCase() {
    return this.http.get<CovidCountryWise[]>(covidCountryWiseUrl);
  }
}
