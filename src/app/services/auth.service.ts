import { Injectable } from '@angular/core';
import { DoodlrApiService } from './doodlr-api.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private doodlrApiService: DoodlrApiService ) { }

  isAuthenticated: boolean = false;
  canEditPost: boolean = false;

  isLoggedIn(){
    return this.doodlrApiService.loggedIn().subscribe(res => this.isAuthenticated = true)
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
