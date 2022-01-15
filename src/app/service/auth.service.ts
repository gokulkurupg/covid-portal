import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private toastr: ToastrService, private router: Router) {}

  onLogin(username: string, password: string) {
    if (username === 'gokul' && password === 'gokul') {
      this.isLoggedIn.next(true);
      this.router.navigate(['/portal']);
      return;
    }
    this.toastr.error('incorrect username or password');
  }

  getLoggedInStatus(): Observable<boolean> {
    return this.isLoggedIn.asObservable();
  }

  onLogout() {
    this.isLoggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
