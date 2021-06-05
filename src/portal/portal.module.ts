import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';

import { PortalRoutingModule } from './portal-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CountriesComponent } from './countries/countries.component';
import { CovidService } from './service/covid.service';

@NgModule({
  declarations: [DashboardComponent, CountriesComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatDividerModule,
    PortalRoutingModule,
    HttpClientModule,
  ],
  providers: [CovidService]
})
export class PortalModule {}
