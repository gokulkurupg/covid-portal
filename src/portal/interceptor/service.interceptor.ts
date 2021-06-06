import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { SpinnerComponent } from '../common/spinner.component';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ServiceInterceptor implements HttpInterceptor {
  constructor(private dialog: MatDialog, private toastr: ToastrService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const dialogRef = this.dialog.open(SpinnerComponent, {
      disableClose: true,
    });
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          dialogRef.close();
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        dialogRef.close();
        this.toastr.error('Service Error');
        return throwError(error);
      })
    );
  }
}
