import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class DoodlrApiService {
  constructor(private httpClient:HttpClient,){}

  private REGISTER_ENDPOINT='http://localhost:8000/api/register/'
  private LOGIN_ENDPOINT='http://localhost:8000/login/'
  private DOODLE_ENDPOINT='http://localhost:8000/doodles/'
  private USER_ENDPOINT='http://localhost:8000/users/'
  private COMMENT_ENDPOINT='http://localhost:8000/comments/'
  private SEARCH_COMMENT_ENDPOINT='http://localhost:8000/comments/?search='


  registerUser(email: string, username: string, password: string, password2: string){
    return this.httpClient.post(this.REGISTER_ENDPOINT, {email, username,  password, password2})
  }

  loginUser(username: string, password: string){
    return this.httpClient.post(this.LOGIN_ENDPOINT, {username,password})
  }

  postDoodle(image: any){
    return this.httpClient.post(this.DOODLE_ENDPOINT, image)
  }

  getUser(username: string){
    return this.httpClient.get(this.USER_ENDPOINT+ username +'/')
  }

  getDoodles(){
    return this.httpClient.get(this.DOODLE_ENDPOINT)
  }

  getDoodle(id: string){
    return this.httpClient.get(this.DOODLE_ENDPOINT + id)
  }

  getDoodleComments(id: string){
    return this.httpClient.get(this.SEARCH_COMMENT_ENDPOINT + id)
  }

  postComment(text: any, post: string){
    return this.httpClient.post(this.COMMENT_ENDPOINT, {text, post})
  }

  updateProfilePicture( username:string, profile_picture: any){
    return this.httpClient.patch(this.USER_ENDPOINT + username + '/', profile_picture)
  }

}
