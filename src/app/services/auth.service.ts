import { Injectable } from '@angular/core';
import { DoodlrApiService } from './doodlr-api.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private doodlrApiService: DoodlrApiService ) { }

  isAuthenticated: boolean = false;

  isLoggedIn(){
    return this.doodlrApiService.loggedIn().subscribe(res => this.isAuthenticated = true)
  }

}
