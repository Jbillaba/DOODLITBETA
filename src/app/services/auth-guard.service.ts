import { Injectable, Inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router){}

  canActivate(): boolean{
    if (this.authService.isAuthenticated){
      return true;
    } else {
      this.router.navigate(['/login']);
      return false
    }
  }
}

