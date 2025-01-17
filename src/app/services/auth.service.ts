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

  cookieCheck(){
    this.grabCookie('uid') != null ? this.isAuthenticated = true : this.isAuthenticated = false  
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

  otpAuthenticated(){
    //after action set the accountChangingPermission to false should be done when either sending the response or sometime around then
    //or we could send a short 10 minute cookie once dead we re authenticate
    //should only be used for deleting account, changing email and password 
  }


}
