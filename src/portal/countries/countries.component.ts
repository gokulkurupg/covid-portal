import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CovidCountryWise } from '../common/covid-country-wise.model';
import { CovidService } from '../service/covid.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  covidCountryWiseCases: CovidCountryWise[] = [];
  filteredCountryList: CovidCountryWise[] = [];
  sortByOptions = [
    { id: 1, value: 'Country name' },
    { id: 2, value: 'Number of cases' },
    { id: 3, value: 'Number of deaths' },
    { id: 4, value: 'Number of recovered' },
  ];
  search = new FormControl('');
  sortBy = new FormControl('');
  pageSize = 30;
  isEdit = false;
  editCountryId!: number;
  editCountryName!: string;

  constructor(private covidService: CovidService) {}

  ngOnInit(): void {
    this.getCountryWiseCovidCase();
    this.search.valueChanges.subscribe((value) => {
      this.findCountry(value.toString().toLowerCase());
    });
    this.sortBy.valueChanges.subscribe((value) => {
      this.sortCountryList(value);
    });
  }

  getCountryWiseCovidCase() {
    this.covidService
      .getCountryWiseCovidCase()
      .subscribe((data: CovidCountryWise[]) => {
        this.covidCountryWiseCases = data;
        this.filteredCountryList = data.slice(0,this.pageSize);
      });
  }

  findCountry(value: string) {
    if (value) {
      const filteredCountry = this.covidCountryWiseCases.filter(
        (country) =>
          country.country &&
          country.country.toString().toLowerCase().includes(value)
      );
      this.filteredCountryList = filteredCountry;
      return;
    }
    this.filteredCountryList = this.covidCountryWiseCases;
  }

  sortCountryList(value: number) {
    if (value) {
      if (value === 1)
        this.filteredCountryList.sort((country1, country2) =>
          country1.country.localeCompare(country2.country)
        );
      else if (value === 2)
        this.filteredCountryList.sort(
          (country1, country2) => country1.cases - country2.cases
        );
      else if (value === 3)
        this.filteredCountryList.sort(
          (country1, country2) => country1.deaths - country2.deaths
        );
      else if (value === 4)
        this.filteredCountryList.sort(
          (country1, country2) => country1.recovered - country2.recovered
        );
    }
  }

  onPageChange(event: any) {
    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    this.filteredCountryList = this.covidCountryWiseCases.slice(startIndex, endIndex);
  }

  onEdit(id: number, country: string) {
    this.isEdit = true;
    this.editCountryId = id;
    this.editCountryName = country;
  }

  handleCancel() {
    this.isEdit = false;
  }
}
