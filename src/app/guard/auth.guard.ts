import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}
  canActivate(): Observable<boolean> {
    return this.authService.getLoggedInStatus().pipe(
      map((isLogged) => {
        if (!isLogged) {
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      })
    );
  }
}
