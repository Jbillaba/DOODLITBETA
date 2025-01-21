import { Injectable } from '@angular/core';
import { DoodlrApiService } from './doodlr-api.service'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private doodlrApiService: DoodlrApiService,
              private router: Router ) { }

  isAuthenticated: boolean = false;
  canEditPost: boolean = false;
  accountChangingPermission: boolean = false;

  isLoggedIn(){
    return this.doodlrApiService.loggedIn().subscribe((response) => {
      response.status == 200 ? this.isAuthenticated = true : this.isAuthenticated = false
    })
  }

  authCheck(){
    this.grabCookie('uid') != null ? this.isAuthenticated = true : this.isAuthenticated = false  
  }

  acpCheck(){
    if (this.grabCookie('ACP') != null){
      this.accountChangingPermission = true
      return true
    }
    else{
      this.accountChangingPermission = false
      return false
    }
  }

  logout(){
    this.doodlrApiService.logoutUser().subscribe()
    this.isAuthenticated = false;
  }

  grabCookie(name: string): string|null {
    const nameLenPlus = (name.length +1);
    return document.cookie
              .split(';')
              .map(c => c.trim())
              .filter(cookie=> {
                      return cookie.substring(0, nameLenPlus) === `${name}=`;
              })
              .map(cookie =>  {
                      return decodeURIComponent(cookie.substring(nameLenPlus));
              })[0] || null;
  }
}
