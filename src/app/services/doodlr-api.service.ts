import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoodlrApiService {

  private REGISTER_ENDPOINT='http://localhost:8000/api/register/'
  constructor(private httpClient: HttpClient) { }

  registerUser(email: string, username: string, password: string, password2: string){
    return this.httpClient.post(this.REGISTER_ENDPOINT, {email, username,  password, password2})
  }
}
