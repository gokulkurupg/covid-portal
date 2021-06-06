import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';

import { PortalRoutingModule } from './portal-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CountriesComponent } from './countries/countries.component';
import { CovidService } from './service/covid.service';
import { ServiceInterceptor } from './interceptor/service.interceptor';
import { SpinnerComponent } from './common/spinner.component';

@NgModule({
  declarations: [DashboardComponent, CountriesComponent, SpinnerComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatDividerModule,
    MatButtonModule,
    MatPaginatorModule,
    PortalRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatDialogModule,
  ],
  providers: [
    CovidService,
    { provide: HTTP_INTERCEPTORS, useClass: ServiceInterceptor, multi: true },
  ],
  entryComponents: [SpinnerComponent]
})
export class PortalModule {}
