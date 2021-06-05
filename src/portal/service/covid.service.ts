import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { covidSummaryUrl } from '../common/urls';
import { CovidSummary } from '../common/covid-summary.model';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) { }

  getCovidCaseSummary() {
    return this.http.get<CovidSummary>(covidSummaryUrl);
  }
}
