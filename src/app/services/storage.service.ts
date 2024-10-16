import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(@Inject(DOCUMENT) private document: Document) { }
  private sessionStorage = document.defaultView?.sessionStorage;

  clean (): void {
    this.sessionStorage?.clear()
    location.reload();
    alert("logged out come back soon!!")
  }

  public saveUser(user:any): void {
    location.reload();
    this.sessionStorage?.removeItem(USER_KEY);
    this.sessionStorage?.setItem(USER_KEY, JSON.stringify(user))
  }

  public getUser(): any {
    const user = this.sessionStorage?.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user).user
    }
  }

  public getToken(): any {
    if (this.isLoggedIn()){
      const token : any = this.sessionStorage?.getItem(USER_KEY)
      const authToken = JSON.parse(token).token
      return authToken;
      }
  }

  public isLoggedIn(): boolean {
    const user = this.sessionStorage?.getItem(USER_KEY);

    if (user) {
      return true
    }
    return false 
  }
}
